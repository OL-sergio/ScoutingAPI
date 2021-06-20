const sql = require('mssql');
const sqlConfig = require('../config/database');


const pool1 = new sql.ConnectionPool(sqlConfig);
const pool1Connect = pool1.connect();

pool1.on('error', err => {
    console.log(err);
})

exports.listarTodosScouts = async (req, res) => {
    await pool1Connect;
   try {
        const request = pool1.request();
       var scriptSQL = `select idSCOUT, NAME, FORMAT(BIRTHDATE,'yyyy/MM/dd') BIRTHDATE, COUNTRY, EMAIL, PHONE, FORMAT(CREATION_DATE,'yyyy/MM/dd') CREATION_DATE from SCOUT`;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        console.dir(result.recordset);
        res.status(201).json(result.recordset);
    }
    catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro" })
    }
};


exports.listarScoutId = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool1Connect;
    try {
        const request = pool1.request();
        var scriptSQL = `select idSCOUT, NAME, FORMAT(BIRTHDATE,'yyyy/MM/dd') BIRTHDATE,  COUNTRY, EMAIL, PHONE, FORMAT(CREATION_DATE,'yyyy/MM/dd') CREATION_DATE from SCOUT` +id;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        console.dir(result.recordset);
        res.status(201).json(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro" })
    }
};



exports.criarScout = async (req, res) => {
    const { idSCOUT, NAME, BIRTHDATE, COUNTRY, EMAIL, PHONE, CREATION_DATE } = req.body;
    await pool1Connect;
    try {
        const request = pool1.request();
        var scriptSQL = `insert into Scout( idSCOUT, NAME, BIRTHDATE, COUNTRY, EMAIL, PHONE,  CREATION_DATE) values('` + idSCOUT + `', '` + NAME + `', convert(date, '` + BIRTHDATE + `'), '` + COUNTRY + `', '` + EMAIL + `', '` + PHONE + `', convert(date, '` + CREATION_DATE + `'))`;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        console.dir(result.recordset);
        res.status(201).send({ mensagem: "Scout Adicionado" });
    }
    catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro " })
    }
};

exports.apagarScoutId = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool1Connect; 
    try {
        const request = pool1.request();
        var scriptSQL = `delete from SCOUT where id=` + id;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        res.status(204);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro " })
    }
};

