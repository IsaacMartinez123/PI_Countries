import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountry } from '../../../redux/actions';
import './Nav.css';

const Navbar = ({ isHome, setCurrentPage}) => {
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
            {isHome !== '/home' &&
                <NavLink to={'/home'}>
                <button className='btn-home'>Home</button>
                </NavLink>
            }
            {isHome !== '/create' &&
                <NavLink to={'/create'}>
                <button className='btn-create'>Create Activity</button>
                </NavLink>
            }
            {isHome !== '/activities' &&
                <NavLink to={'/activities'}>
                    <button className='btn-activity'>Activities List</button>
                </NavLink>
            }
            <button className='btn-reset' onClick={getAllCountries}>Reset</button>
        </div>
        </nav>
    );
    };

export default Navbar;
