const sql = require('mssql');
const sqlConfig = require('../config/database');


const pool1 = new sql.ConnectionPool(sqlConfig);
const pool1Connect = pool1.connect();

pool1.on('error', err => {
    console.log(err);
})

exports.listarTodoStaff = async (req, res) => {
    await pool1Connect;
    try {
        const request = pool1.request();
        var scriptSQL = `select  idSTAFF, NAME, FORMAT(BIRTHDATE, 'yyyy/MM/dd')BIRTHDATE, COUNTRY, EMAIL, PHONE,FORMAT(CREATION_DATE, 'yyyy/MM/dd') CREATION_DATE from STAFF `;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        console.dir(result.recordset);
        res.status(201).json(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro " })
    }
};

exports.criarStaff = async (req, res) => {
    const { idSTAFF, NAME, BIRTHDATE, COUNTRY, EMAIL, PHONE, CREATION_DATE } = req.body;
    await pool1Connect;
    try {
        const request = pool1.request();
        var scriptSQL = `insert into STAFF(idSTAFF, NAME, BIRTHDATE, COUNTRY, EMAIL, PHONE, CREATION_DATE) values('` + idSTAFF + `', '` + NAME + `', convert(date, '` + BIRTHDATE + `'), '` + COUNTRY + `', '` + EMAIL + `', '` + PHONE + `', convert(date, '` + CREATION_DATE + `'))`;
        const result = await request.query(scriptSQL);
        console.log(scriptSQL);
        console.dir(result.recordset);
        res.status(201).send({ mensagem: "STAFF Adicionado" });
    }
    catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ mensagem: "Erro " })
    }
 };


    exports.apagarStaffId = async (req, res) => {
        const id = parseInt(req.params.id);
        await pool1Connect;
        try {
            const request = pool1.request();
            var scriptSQL = `delete from STAFF where id=` + id;
            const result = await request.query(scriptSQL);
            console.log(scriptSQL);
            res.status(204);
        }
        catch (err) {
            console.error('SQL error', err);
            res.status(500).send({ mensagem: "Erro" })
        }
    };
