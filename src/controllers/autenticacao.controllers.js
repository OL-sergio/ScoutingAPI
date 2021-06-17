// JavaScript source code
const jwt = require('jsonwebtoken');
const sql = require('mssql');
const sqlConfig = require('../config/database');
const bcrypt = require('bcrypt');
const { json } = require('express');
const { password } = require('../config/database');
//it's necessary for making log in function
require('dotenv').config();


// Criar ligação base de dados para ser usada pelos métodos
const pool1 = new sql.ConnectionPool(sqlConfig);
const pool1Connect = pool1.connect();

pool1.on('error', err => {
    console.log(err);
})


exports.listAllUsers = async (req, res) => {
    await pool1Connect; // Garante que a ligação existe
    try {
        const request = pool1.request();
        var scriptSQL = `select USERNAME,PASSWORD,EMAIL,FORMAT(BIRTHDATE,'yyyy/MM/dd') BIRTHDATE, NATIONALITY from USERS`;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        console.dir(result.recordset);
        res.status(201).json(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro na conexão BD" })
    }
};


exports.register = async (req, res, next) => {
    const { USERNAME, PASSWORD, EMAIL, BIRTHDATE, NATIONALITY} = req.body;
    PASSWORDHS = await bcrypt.hash(PASSWORD, 5);
    await pool1Connect;
    try {
        const request = pool1.request();
        var scriptSQL = `insert into USERS(USERNAME, PASSWORD, EMAIL, BIRTHDATE, NATIONALITY) 
                                   values ('` + USERNAME + `','` + PASSWORDHS + `','` + EMAIL + `',convert(date,'` + BIRTHDATE + `'),'` + NATIONALITY + `')`;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        res.status(201).send({ mensagem: "Utilizador registado com sucesso!" });
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro na conexão BD" })
    }
};

exports.login = async (req, res, next) => {
    const { USERNAME, PASSWORD } = req.body;
    await pool1Connect;
    try {
        const request = pool1.request();
        var scriptSQL = `select USERNAME, PASSWORD from USERS where USERNAME ='` + USERNAME + `'`;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        if (result.recordset.length == 0) {
            res.status(400).send({ mensagem: "Utilizador não registado na BD" })
            return;
        }
        const utilBD = result.recordset[0].USERNAME;
        const passBD = result.recordset[0].PASSWORD;

        if (!await bcrypt.compare(PASSWORD, passBD)) {
            res.status(400).send({ mensagem: "Passord incorreta!!" })
            return;
        }

        var token = jwt.sign({ id: utilBD }, process.env.SEGREDO_API, {
            expiresIn: 600 // expires in 10min
        });
        res.status(200).send({ auth: true, token: token });
        return;

    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro na conexão BD" })
    }
};
