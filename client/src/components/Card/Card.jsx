import { NavLink } from 'react-router-dom';

const Card = (props) => {

    return(
        // <div className="card">
        //     <NavLink className="link" to={`/detail/${props.id}`}>
        //     <h1>name: {props.name}</h1>
        //     <h1>continent: {props.continent}</h1>
        //     <h1>population: {props.population} inhabitants</h1>
        //     <img className="img" src={props.flag} alt="" />
        //     </NavLink>
        // </div>
        <div class="card-container">
        <NavLink className="link" to={`/detail/${props.id}`}>
            <div class="deck">
                <div class="card">
                    <div class="face">
                        <div className="img">
                            <img src={props.flag} alt="" />        
                        </div>
                        
                        <h1>name: <span>{props.name}</span></h1>
                        <h1>continent: <span>{props.continent}</span></h1>
                        <h1>population: <span>{props.population} inhabitants</span></h1>
                    </div>
                </div>
            </div>
        </NavLink>
        </div>
    )
}

export default Card