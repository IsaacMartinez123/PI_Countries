import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { findCountryById, resetDetail } from "../../redux/actions";
import './Detal.css'

const Detail = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const countryDetail = useSelector((state) => state.countryDetail[0])

    useEffect(() => {
        dispatch(resetDetail())
        dispatch(findCountryById(id));
    }, [dispatch, id]);

    return(
        <div>
            {countryDetail ?
            <div>
                <NavLink to={`/home`}>
                    <button>x</button>
                </NavLink>
                <h1>id: {countryDetail.id}</h1>
                <h1>name: {countryDetail.name}</h1>
                <h1>continent: {countryDetail.continent}</h1>
                <h1>capital: {countryDetail.capital}</h1>
                <h1>subregion: {countryDetail.subregion}</h1>
                <h1>area: {countryDetail.area}</h1>
                <h1>population: {countryDetail.population} inhabitants</h1>
                <img className="img" src={countryDetail.flag} alt="" />
                {countryDetail.activities?.map(activity => (
                    <div key={activity.name}>
                        <h2>activity: {activity.name}</h2>
                        <h2>difficulty: {activity.difficulty}</h2>
                        <h2>duration: {activity.duration}</h2>
                        <h2>season: {activity.season}</h2>
                    </div>
                ))}
            </div>
            : <div>
                <h1>Loading...</h1>
            </div>}
        </div>
    )
}

export default Detail;