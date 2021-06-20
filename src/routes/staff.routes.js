const router = require('express')();
const staffController = require('../controllers/staff.countroller');

//localhost: 3000 / api / staff
router.get('/staff', staffController.listarTodoStaff);

//localhost: 3000 / api / staff
router.post('/staff', staffController.criarStaff);

//localhost: 3000 / api / staff /: id
router.delete('/staff/:id', staffController.apagarStaffId);

module.exports = router;