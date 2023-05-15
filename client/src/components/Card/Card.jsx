import { NavLink } from 'react-router-dom';

const Card = (props) => {

    return(
        <div className="card">
            
            <h1>name: {props.name}</h1>
            <h1>continent: {props.continent}</h1>
            <h1>population: {props.population} inhabitants</h1>
            <NavLink to={`/detail/${props.id}`}>
                <img className="img" src={props.flag} alt="" />
            </NavLink>
            {/* <div>
            {props.activities.map(activity => (
                <div key={activity.name}>
                    <h2>activity: {activity.name}</h2>
                    <h2>season: {activity.season}</h2>
                </div>
            ))}
            </div> */}
        </div>
    )
}

export default Card