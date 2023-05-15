const { Router } = require('express');
const { getAllActivities, createActivity } = require('../controllers/activityController.js') 

const router = Router();

router.get('/activities', (req, res) => {
    getAllActivities(req, res)
});

router.post('/activities', async (req, res) => {
    createActivity(req, res)
});

module.exports = router