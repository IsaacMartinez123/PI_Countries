import { NavLink } from "react-router-dom";
import './Landing.css'

const LandingPage = () =>{
    return(
        <nav className="nav-landing">
            <ul>
                <li>
                    <button className="btn-home-landing"> 
                        <NavLink  to="/home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                        </NavLink> 
                        <span className="title-content">Home</span>
                    </button>
                </li>                
            </ul>
        </nav>
    )
}

export default LandingPage;