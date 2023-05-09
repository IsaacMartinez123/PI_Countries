const { Router } = require('express');
const {  getActivities } = require('../controllers/requestDataInBd.js')
const { Country, Activity } = require('../db.js')

const router = Router();

router.get('/activities', async (req, res) => {
    try {
        const allActivities = await getActivities()
        res.status(200).json(allActivities)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.post('/activities', async (req, res) => {
    const {countryId, name, difficulty, duration, season} = req.body

    const activityCreate = await Activity.create({
        name, 
        difficulty, 
        duration, 
        season
    })

    const countriesBd = await Country.findAll({
        where: { id: countryId }
    });
    
    activityCreate.addCountries(countriesBd)

    res.status(200).json('Creado')
});

module.exports = router