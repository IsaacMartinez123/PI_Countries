const {  getActivities } = require('./requestDataInBd')
const { Country, Activity } = require('../db')

const getAllActivities = async (req, res) => {
    try {
        const allActivities = await getActivities()
        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createActivity = async (req, res) => {
    try {
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

        return res.status(200).json(activityCreate)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllActivities,
    createActivity
}