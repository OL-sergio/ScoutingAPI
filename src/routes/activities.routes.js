// JavaScript source code
const router = require('express')();
const activitesController = require('../controllers/activities.controllers');

router.get('/GETactivities', activitesController.listAllActivities);

router.post('/POSTactivities', activitesController.createActivities);


module.exports = router;