import './Home.css'
import { useSelector, useDispatch } from 'react-redux';
import { getCountry, orderCountry, orderPopulation, filterContinent, getActivities, filterActivity } from '../../redux/actions';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';

const Home = () => {

    const dispatch = useDispatch()

    const countries = useSelector(state => state.countries);
    const [activities] = useSelector(state => state.activities);
    const [aux, setAux] = useState(false)
    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(10)
    const indexOfLastRecipe = currentPage * countriesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Crear filas con 3 elementos en cada una
    const rows = [];
    for (let i = 0; i < currentCountries.length; i += 3) {
        const row = currentCountries.slice(i, i + 3);
        rows.push(row);
    }

    // useEffect(() => {
    //     dispatch(getCountry())
    //     dispatch(getActivities());
    // }, [dispatch]);


    const handleOrder = (event) =>{
        if (!aux) {
            dispatch(orderCountry(event.target.value))
            setAux(true)
        } else {
            dispatch(orderCountry(event.target.value))
            setAux(false)
        }
    }

    const handleOrderPopulation = (event) =>{
        if (!aux) {
            dispatch(orderPopulation(event.target.value))
            setAux(true)
        } else {
            dispatch(orderPopulation(event.target.value))
            setAux(false)
        }
    }
    const handleOrContinent = (event) =>{
        dispatch(filterContinent(event.target.value))
    }

    const handleOrActivity = (event) =>{
        dispatch(filterActivity(event.target.value))
    }
    //Asia, Africa, North America, South America, Antarctica, Europe, and Australia
    return (
        <>
        <div className='selec-container'>
            <select onChange={handleOrder}>
                <option >Order By Name</option>
                <option value="A">A-Z</option>
                <option value="D">Z-A</option>
            </select>
            <select onChange={handleOrderPopulation}>
                <option >Order By Population</option>
                <option value="MR">Major to Minor</option>
                <option value="MJ">Minor to Major</option>
            </select>
            <select onChange={handleOrContinent}>
                <option >Order By Continent</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="AllCountries">All Countries</option>
            </select>
            <select name='activity' onChange={handleOrActivity}>
                <option >Order By Activities</option>
                <option value="AllActivities">All Activities</option>
                {
                    activities?.map((activity) => (
                        <option value={activity.name}>{activity.name}</option>
                    ))
                }
            </select>

        </div>
                
        <div className="paginado">
            <Paginado
                key="paginado"
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginado={paginado}
                currentPage={currentPage}
            />
        </div>
        
        {/* <div className='Cards'>
                {
                
                countries && (
                countries.map((country) => {
                    // console.log(country);
                    return (
                        <Card
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            continent={country.continent}
                            population={country.population}
                            flag={country.flag}
                            activities={country.activities}
                        />
                    )
                })
                )}
        </div> */}
        {rows.map((row, index) => (
            <div className='Cards' key={index}>
            {row.map((country) => (
                <Card
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    continent={country.continent}
                    population={country.population}
                    flag={country.flag}
                    activities={country.activities}
                />
            ))}
            </div>
        ))}
        
        <div className="paginado">
            <Paginado
                key="paginado"
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginado={paginado}
                currentPage={currentPage}
            />
        </div>
        </>
        )
}

export default Home