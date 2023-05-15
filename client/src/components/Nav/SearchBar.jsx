import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountry } from '../../redux/actions';
import './Nav.css'
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (name.length === 0) {
        return alert('Debes ingresar un país');
        }
        dispatch(getCountry(name));
        setName('');
    };

    return (
        <div className="searchbar-container">
        <NavLink to={'/create'}>
            <button>Create Activity</button>
        </NavLink>
        <NavLink to={'/home'}>
            <button>Home</button>
        </NavLink>
        <form onSubmit={onSubmit}>
            <button type="submit" className="btn-agregar">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </span>
            </button>
            <input className="btn-input" onChange={handleChange} value={name} placeholder="Ingresa el ID del personaje" type="search" />
        </form>
        </div>
    );
};

export default SearchBar;
