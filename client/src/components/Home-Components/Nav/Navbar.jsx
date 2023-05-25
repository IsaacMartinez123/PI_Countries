import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountry } from '../../../redux/actions';
import './Nav.css';

const Navbar = ({ setCurrentPage, isHome }) => {
    const dispatch = useDispatch();

    const getAllCountries = (event) => {
        event.preventDefault();
        dispatch(getCountry());
    };

    return (
        <nav className='nav-container'>
        <div className='nav-left'>
            {isHome === '/home' && <SearchBar setCurrentPage={setCurrentPage}/>}
        </div>
        <div className='nav-buttons'>
            {isHome === '/create' &&
                <NavLink to={'/home'}>
                <button className='btn-home'>Home</button>
                </NavLink>
            }
            {isHome === '/home' &&
                <NavLink to={'/create'}>
                <button className='btn-create'>Create Activity</button>
                </NavLink>
            }
            <button className='btn-reset' onClick={getAllCountries}>Reset</button>
        </div>
        </nav>
    );
    };

export default Navbar;
