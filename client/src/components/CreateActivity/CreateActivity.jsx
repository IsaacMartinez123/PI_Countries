import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActivity, getActivities } from "../../redux/actions";
import "./Create.css";
import validate from "./validate";

const CreateActivity = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
    });

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);

    const [error, setError] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
    });

    const handleChange = (event) => {
        event.preventDefault();

        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });

        setError(validate({
            ...input,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSelectChange = (event) => {
        event.preventDefault();
        const selectedCountryId = event.target.value;

        const findRepeat = input.countryId.includes(selectedCountryId)

        if (findRepeat) {
            return alert('This country has already been selected')
        }

        setInput((input) => ({
            ...input,
            countryId: [...input.countryId, selectedCountryId],
        }));

        setError(validate({
            ...input,
            countryId: selectedCountryId,
        }));
        
    };

    const handleDelete = (countrySelected) => {
        setInput({
            ...input,
            countryId: input.countryId.filter((country) => country !== countrySelected),
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (!input.name || !input.difficulty || !input.duration || !input.season || input.countryId.length === 0) {
            return alert("You must complete all the fields to create an activity");
        }

        dispatch(postActivity(input));
        alert("Activity created successfully!");
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countryId: [],
        });
            navigate("/home");
    };

    return (
        <div>
        <form className="form-container" onSubmit={handleOnSubmit}>
            <h1>Create tourist activity</h1>

            <div className="form-row">
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input onChange={handleChange} value={input.name} type="text" placeholder="Enter the name of the activity" name="name"/>
                        {error.name && <p className="msg-error">{error.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="difficulty">Difficulty:</label>
                        <input onChange={handleChange} value={input.difficulty} type="number" min="1" max="5" placeholder="Enter the difficulty of the activity(1 to 5)" name="difficulty"/>
                        {error.difficulty && <p className="msg-error">{error.difficulty}</p>}
                    </div>
                </div>

                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="duration">Duration:</label>
                        <input
                            onChange={handleChange}
                            value={input.duration}
                            type="text"
                            placeholder="Enter the duration of the activity"
                            name="duration"
                        />
                        {error.duration && <p className="msg-error">{error.duration}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="season">Season:</label>
                        <select name="season" onChange={handleChange}>
                            <option>Select the season of the activity</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                        {error.season && <p className="msg-error">{error.season}</p>}
                    </div>
                </div>

            </div>

            <div className="form-group">
                <label htmlFor="countryId">Country:</label>
                <select name="countryId" onChange={handleSelectChange}>
                    <option>Select the country/s</option>
                    {countries &&
                    countries.map((country) => (
                        <option value={country.id} key={country.id}>
                        {country.name}
                        </option>
                    ))}
                </select>
                {error.countryId && <p className="msg-error">{error.countryId}</p>}
            </div>

            <div className="selected-countries-container">
            <h3>List of Selected Countries:</h3>
            {input.countryId.map((countrySelected) => (
                <div key={countrySelected} className="country-container">
                    <span>{countrySelected}</span>
                    <input type="button" value="x" onClick={() => handleDelete(countrySelected)}/>
                </div>
            ))}
            </div>

            <button className="btn-submit" type="submit">Submit</button>
        </form>
        </div>
    );
};

export default CreateActivity;
