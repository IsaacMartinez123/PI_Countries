import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, } from 'react-redux';
import { postActivity, getActivities } from "../../redux/actions";
import './Create.css'
import validate from './validate'

const CreateActivity = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries);
    const navigate = useNavigate()

    
    
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: []
    })

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);

    const [error, setError] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: []
    })
    
    const handleChange = (event) => {
        event.preventDefault();
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setError(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    const handleSelectChange = (event) => {
        // const selectedOptions = Array.from(event.target.selectedOptions);
        // const selectedCountryIds = selectedOptions.map((option) => option.value);
        
        // setInput({
        //     ...input,
        //     countryId: selectedCountryIds,
        // });
    
        // // Obtener los detalles de los países seleccionados
        // const selectedCountries = selectedOptions.map((option) => {
        //     const countryId = option.value;
        //     return countries.find((country) => country.id === countryId);
        // });

        // setCountry((prevCountries) => [...prevCountries, ...selectedCountries]);
        event.preventDefault();
        setInput({
            ...input,
            countryId: [...input.countryId, event.target.value]
        })
    };

    const handleDelete = (countrySelected) =>{
        setInput({
            ...input,
            countryId: input.countryId.filter(country => country !== countrySelected)
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (!input.name || !input.difficulty || !input.duration || !input.season || input.countryId.length === 0) {
            return alert('debes llenar todo')
        }
        dispatch(postActivity(input));
        alert("¡Actividad creada correctamente!");
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countryId: []
        })
        navigate('/home');
    }
    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} value={input.name} type="text" placeholder="ingrese name" name="name"/>
                {error.name && <p className="msg-error">{error.name}</p>}
                
                <label htmlFor="difficulty">difficulty: </label>
                <input onChange={handleChange} value={input.difficulty} type="number" min='1' max='5' placeholder="ingrese difficulty" name="difficulty"/>
                {error.difficulty && <p className="msg-error">{error.difficulty}</p>}
                
                <label htmlFor="duration">duration: </label>
                <input onChange={handleChange} value={input.duration} type="text" placeholder="ingrese duration" name="duration"/>
                {error.duration && <p className="msg-error">{error.duration}</p>}
                
                <label htmlFor="season">season: </label>
                <select name="season" onChange={handleChange}>
                    <option>Seleccione una Season</option>
                    <option value='Summer'>Summer</option>
                    <option value='Autum'>Autum</option>
                    <option value='Winter'>Winter</option>
                    <option value='Spring'>Spring</option>
                </select>
                {error.season && <p className="msg-error">{error.season}</p>}
                
                <label htmlFor="countryId">country: </label>
                <select name="countryId" onChange={(event) => handleSelectChange(event)}>
                    <option>Seleccione country</option>
                    {countries &&
                        countries.map((country) => (
                            <option value={country.id}>{country.name}</option>
                        ))
                    }
                </select>
                {error.countryId && <p className="msg-error">{error.countryId}</p>}
                    
                <div>
                <h3>Paises: </h3>
                    {input.countryId.map((countrySelected) => (
                        <>
                        <input type="button" value="x" onClick={()=>handleDelete(countrySelected)}/>
                        <li key={countrySelected}>{countrySelected}</li>
                        </>
                    ))}
                </div>


                <button type="submit" >Submit</button>
                
            </form>
        </div>
    )
//'Summer', 'Autum', 'Winter', 'Winter', 'Spring'
}

export default CreateActivity;