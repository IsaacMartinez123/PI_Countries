import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCountry } from '../../../redux/actions';

const SearchBar = ({ setCurrentPage }) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
        if (event.target.value === '') {
            dispatch(addCountry(''));
            setCurrentPage(1)
        } else {
            dispatch(addCountry(event.target.value));
            setCurrentPage(1)
        }
    };

    return (
        <div className="searchbar-container">
            <input className="btn-input" onChange={handleChange} value={name} placeholder="Ingresa el ID del personaje" type="search"/>
        </div>
    );
};

export default SearchBar;

