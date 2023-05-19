import { useNavigate } from "react-router-dom";
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
            return alert('You must complete all the fields to create an activity')
        }
        dispatch(postActivity(input));
        alert("Activity created successfully!");
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
        <div >
            <form className="form-container" onSubmit={handleOnSubmit}>
            <h1>Create tourist activity</h1>
            
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} value={input.name} type="text" placeholder="Enter the name of the activity" name="name"/>
                {error.name && <p className="msg-error">{error.name}</p>}
                
                <label htmlFor="difficulty">Difficulty: </label>
                <input onChange={handleChange} value={input.difficulty} type="number" min='1' max='5' placeholder="Enter the difficulty of the activity 1 to 5" name="difficulty"/>
                {error.difficulty && <p className="msg-error">{error.difficulty}</p>}
                
                <label htmlFor="duration">Duration: </label>
                <input onChange={handleChange} value={input.duration} type="text" placeholder="Enter the duration of the activity" name="duration"/>
                {error.duration && <p className="msg-error">{error.duration}</p>}
                
                <label htmlFor="season">Season: </label>
                <select name="season" onChange={handleChange}>
                    <option>Select the season of the activity</option>
                    <option value='Summer'>Summer</option>
                    <option value='Autum'>Autum</option>
                    <option value='Winter'>Winter</option>
                    <option value='Spring'>Spring</option>
                </select>
                {error.season && <p className="msg-error">{error.season}</p>}
                
                <label htmlFor="countryId">Country: </label>
                <select name="countryId" onChange={(event) => handleSelectChange(event)}>
                    <option>Select the country/s</option>
                    {countries &&
                        countries.map((country) => (
                            <option value={country.id}>{country.name}</option>
                        ))
                    }
                </select>
                {error.countryId && <p className="msg-error">{error.countryId}</p>}
                    
                <div>
                <h3>List of Selected Countries: </h3>
                    {input.countryId.map((countrySelected) => (
                        <>
                        <input type="button" value="x" onClick={()=>handleDelete(countrySelected)}/>
                        <li key={countrySelected}>{countrySelected}</li>
                        </>
                    ))}
                </div>


                <button className="btn-submit" type="submit" >Submit</button>

            </form>
        </div>
    )
//'Summer', 'Autum', 'Winter', 'Winter', 'Spring'
}

export default CreateActivity;