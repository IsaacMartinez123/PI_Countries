import { NavLink } from 'react-router-dom';

const Card = (props) => {

    return(
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