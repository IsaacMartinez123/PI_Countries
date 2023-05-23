import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountry } from '../../redux/actions';

const Navbar = () => {
    const dispatch = useDispatch();

    const getAllCountries = (event) => {
        event.preventDefault();
        dispatch(getCountry());
    };

    return (
        <nav className='nav-container'>
        <div className='nav-left'>
            <SearchBar />
        </div>
        <div className='nav-buttons'>
            <NavLink to={'/home'}>
            <button className='btn-home'>Home</button>
            </NavLink>
            <NavLink to={'/create'}>
            <button className='btn-create'>Create Activity</button>
            </NavLink>
            <button className='btn-reset' onClick={getAllCountries}>Reset</button>
        </div>
        </nav>
    );
    };

export default Navbar;
