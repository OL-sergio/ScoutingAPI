// JavaScript source code
const router = require('express')();
const activitiesController = require('../controllers/activities.controllers');

//localhost:3000/viewActivities
router.get('/viewActivities', activitiesController.listAllActivities);

//localhost:3000/viewActivities
//router.get('/viewActivities:id', activitiesController.listActivity);

//localhost:3000/createActivities
router.post('/createActivities', activitiesController.createActivities);


module.exports = router;
