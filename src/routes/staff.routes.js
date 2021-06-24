const router = require('express')();
const staffController = require('../controllers/staff.countroller');


//localhost:3000/GetStaff
router.get('/GetStaff', staffController.listarTodoStaff);

//localhost:3000/PostStaff
router.post('/PostStaff', staffController.criarStaff);

//localhost:3000/GetStaffId
router.delete('/staff/:id', staffController.apagarStaffId);

module.exports = router;