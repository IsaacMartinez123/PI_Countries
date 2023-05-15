const { Router } = require('express');
const { getCountries, findCountryById } = require('../controllers/countryController')
// const { getBDInfo } = require('../controllers/requestDataInBd.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async (req, res) => {
    getCountries(req, res)
});

router.get('/countries/:id', async (req, res) => {
    findCountryById(req, res)
});

module.exports = router;
