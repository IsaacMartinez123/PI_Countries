const { Router } = require('express');
const { getBDInfo } = require('../controllers/requestDataInBd.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async (req, res) => {
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
        res.status(200).json(allCountries)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.get('/countries/:id', async (req, res) => {
    try {
        const {id} = req.params
        const allCountries = await getBDInfo()

        if (id) {
            const countryById = allCountries.filter(country => country.id === id.toUpperCase())

            countryById
            ? res.status(200).json(countryById)
            : res.status(404).json('Country Not Found') 
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

module.exports = router;
