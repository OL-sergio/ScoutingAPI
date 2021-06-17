// JavaScript source code
const router = require('express')();
const autenticacaoController = require('../controllers/autenticacao.controllers');

router.get('/users', autenticacaoController.listAllUsers);

router.post('/register', autenticacaoController.register);

router.post('/login', autenticacaoController.login);

module.exports = router;