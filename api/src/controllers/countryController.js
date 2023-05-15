const { getBDInfo } = require('../controllers/requestDataInBd.js')

const getCountries = async (req, res) => {
    const {name} = req.query
    try {
        const allCountries = await getBDInfo()

        if (name) {
            const countriesName = allCountries.filter(country => 
                country.name.toLowerCase().includes(name.toLowerCase())
            )
        
            return countriesName 
            ? res.status(200).json(countriesName)
            : res.status(404).json('Country Not Found') 
            
        }
        return res.status(200).json(allCountries)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const findCountryById = async (req, res) => {
    const {id} = req.params
    try {
        const allCountries = await getBDInfo()

        if (id) {
            const countryById = allCountries.filter(country => country.id === id.toUpperCase())

            return countryById
            ? res.status(200).json(countryById)
            : res.status(404).json('Id of Country Not Found') 
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getCountries,
    findCountryById
}