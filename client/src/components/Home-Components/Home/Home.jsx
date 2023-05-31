import './Home.css'
import { useSelector, useDispatch } from 'react-redux';
import { getCountry, orderCountry, filterContinent, getActivities, filterActivity } from '../../../redux/actions';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';

const Home = ({ paginado, currentPage, countriesPerPage, rows, setCurrentPage }) => {
    const dispatch = useDispatch()
    //Estados globales
    const activities = useSelector(state => state.activities);
    const countries = useSelector(state => state.countries);
    //Estados locales que ayuda a saber cuando se seleccionó algo y deshabilitar el primer option 
    const [continentSelected, setContinentSelected] = useState(false)
    const [activitySelected, setActivitySelected] = useState(false)
    const [orderSelected, setOrderSelected] = useState(false)
    //peticion a las actions para obtener los paises y actividades
    useEffect(() => {
        dispatch(getCountry())
        dispatch(getActivities());
    }, [dispatch]);
    //Ordenamiento
    const handleOrder = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue !== '') {
            setOrderSelected(true);
        } else {
            setOrderSelected(false);
        }
        dispatch(orderCountry(selectedValue));
        setCurrentPage(1)
    };
    //Filtros
    const handleOrContinent = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue !== '') {
            setContinentSelected(true);
        } else {
            setContinentSelected(false);
        }
        dispatch(filterContinent(selectedValue));
        setCurrentPage(1)
    };

    const handleOrActivity = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue !== '') {
            setActivitySelected(true);
        } else {
            setActivitySelected(false);
        }
        dispatch(filterActivity(selectedValue));
        setCurrentPage(1)
    };

    return (
        <>
        <div className='selec-container'>
            <select onChange={handleOrder}>
                <option disabled={orderSelected}>Order By Name</option>
                <option value="A">A - Z</option>
                <option value="D">Z - A</option>
            </select>
            <select onChange={handleOrder}>
                <option disabled={orderSelected}>Order By Population</option>
                <option value="MR">Major to Minor</option>
                <option value="MJ">Minor to Major</option>
            </select>
            <select onChange={handleOrContinent}>
                <option disabled={continentSelected}>Filter By Continent</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="AllCountries">All Countries</option>
            </select>
            <select onChange={(event) => handleOrActivity(event)}>
                <option disabled={activitySelected}>Filter By Activities</option>
                <option value="AllActivities">All Countries</option>
                {
                    activities?.map((activity) => (
                        <option value={activity?.name}>{activity?.name}</option>
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
        {rows.map((row) => (
            <div className='Cards'>
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
        </>
    )
}
export default Home