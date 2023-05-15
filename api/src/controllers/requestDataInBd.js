const { Country, Activity } = require('../db.js')
const axios = require('axios')
const URL = 'https://restcountries.com/v3/all'

const getDataByApi = async () => {

    try {
        const { data } = await axios(URL)
        const contriesApiInfo = await data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[0],
                continent: country.region,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            }
        })

        const saveDataInBd = async () =>{
            contriesApiInfo.map((element) => {
                Country.findOrCreate({
                    where: {
                        name: element.name,
                        id: element.id
                    },
                    defaults: {
                        flag: element.flag,
                        continent: element.continent,
                        capital: element.capital,
                        subregion: element.subregion,
                        area: element.area,
                        population: element.population,
                    }
                }).catch((error) => {
                    console.log(error);
                });
            })
        }
        saveDataInBd()
        return contriesApiInfo
    } catch (error) {
        return Error({ message: error.message });
    }
}

const getBDInfo = async () => {
    try {
        await getDataByApi()
        const info = await Country.findAll({
            include: {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: {
                    attributes: []
                }
            }
        })
        return info
    } catch (error) {
        return Error({ message: error.message });
    }
    
}


const getActivities = async () => {
    try {
        const activities = await Activity.findAll()
        return activities
    } catch (error) {
        return Error({ message: error.message });
    }
    
}

module.exports = {
    getBDInfo,
    getActivities
}
