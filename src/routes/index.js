// JavaScript source code
const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) Á ScoutingAPI  desenvolvida com Node.js + MSServer!',
        version: '1.0.0',
    });
});

module.exports = router;

