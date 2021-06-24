// JavaScript source code
const sql = require('mssql');
const sqlConfig = require('../config/database');


// Criar ligação á base de dados para ser usada pelos metodos
const pool1 = new sql.ConnectionPool(sqlConfig);
const pool1Connect = pool1.connect();

pool1.on('error', err => {
    console.log(err);
})


exports.listAllActivities = async (req, res) => {
    await pool1Connect; // Garante que a ligação existe
    try {
        const request = pool1.request();
        var scriptSQL = `select idACTIVITIES ,NAME, FORMAT(START_DATE,'yyyy/MM/dd') START_DATE, ADDRESS, CITY, COUNTRY, EMAIL, PHONE, FORMAT(CREATION_DATE,'yyyy/MM/dd') CREATION_DATE from ACTIVITIES`;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        console.dir(result.recordset);
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro na conexão BD" })
    }
};


exports.createActivities = async (req, res) => {
    const {  NAME, START_DATE, ADDRESS, CITY, COUNTRY, EMAIL, PHONE, CREATION_DATE} = req.body;
    await pool1Connect; // Garante que a ligação existe
    try {
        const request = pool1.request();
        var scriptSQL = `insert into ACTIVITIES ( NAME, START_DATE, ADDRESS, CITY, COUNTRY, EMAIL, PHONE, CREATION_DATE)
                                values ( '` + NAME + `', convert(date,'` + START_DATE + `'), '` + ADDRESS + `', '` + CITY + `', '` + COUNTRY + `','` + EMAIL + `','` + PHONE + `', convert(date,'` + CREATION_DATE + `') )`;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        console.dir(result.recordset);
        res.status(201).send({ mensagem: "Actividade criada" });
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro na conexão BD" })
    }
};