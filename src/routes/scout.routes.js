const router = require('express')();
const scoutController = require('../controllers/scout.controller');

//localhost: 3000 / api / scout
router.get('/scout', scoutController.listarTodosScouts);

//localhost: 3000 / api / scout /: id
router.get('/scout/:id', scoutController.listarScoutId);

//localhost: 3000 / api / scout
router.post('/scout', scoutController.criarScout);

//localhost: 3000 / api / scout /: id
router.delete('/scout/:id', scoutController.apagarScoutId);

module.exports = router;