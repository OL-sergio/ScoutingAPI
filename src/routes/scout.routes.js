const router = require('express')();
const scoutController = require('../controllers/scout.controller');

//localhost:3000/GetScout
router.get('/GetScout', scoutController.listarTodosScouts);

//localhost:3000/GetScoutId
router.get('/GetScoutId', scoutController.listarScoutId);

//localhost:3000/PostScout
router.post('/PostScout', scoutController.criarScout);

//localhost: 3000 / api / scout /: id
router.delete('/scout/:id', scoutController.apagarScoutId);

module.exports = router;