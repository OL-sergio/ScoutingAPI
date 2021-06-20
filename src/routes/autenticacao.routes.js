// JavaScript source code
const router = require('express')();
const autenticacaoController = require('../controllers/autenticacao.controllers');


//localhost:3000/user/users 
router.get('/users', autenticacaoController.listAllUsers);

//localhost:3000/user/register
router.post('/register', autenticacaoController.register);

//localhost:3000/user/login
router.post('/login', autenticacaoController.login);


module.exports = router;