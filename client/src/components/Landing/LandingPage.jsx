import { NavLink } from "react-router-dom";
import "./Landing.css";

const LandingPage = () => {
    return (
        <div className="landing-container">
        <div className="card-landing">
            <h1 className="title">Welcome. We discover the countries of the world</h1>
            <img src="https://i0.wp.com/www.puntogeek.com/wp-content/uploads/2013/09/BreathingEarth.gif?w=600" alt="" />
            {/* <p className="subtitle">Find your next adventure</p> */}
            <NavLink to="/home">
                <button className="explore-button">Explore Countries</button>
            </NavLink>

        </div>
        </div>
    );
};

export default LandingPage;

