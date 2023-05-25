import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { findCountryById, resetDetail } from "../../redux/actions";
import "./Detail.css";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const countryDetail = useSelector((state) => state.countryDetail[0]);

    useEffect(() => {
        dispatch(resetDetail());
        dispatch(findCountryById(id));
    }, [dispatch, id]);

    return (
        <div className="detail">
        {countryDetail ? (
            <div className="card-detail">
                <img className="card-image" src={countryDetail.flag} alt="" />
                <div className="card-content">
                    <h2 className="card-subtitle">
                    ID: {countryDetail.id} | Name: {countryDetail.name} | Continent:{" "}
                    {countryDetail.continent}
                    </h2>
                    <h2 className="card-subtitle">
                    Capital: {countryDetail.capital} | Subregion:{" "}
                    {countryDetail.subregion}
                    </h2>
                    <h2 className="card-subtitle">
                    Area: {countryDetail.area} | Population: {countryDetail.population}
                    </h2>

                    {countryDetail.activities.length > 0 ? (
                    <>
                        <h2 className="activity-heading">Activity/ies:</h2>
                        {countryDetail.activities.map((activity) => (
                        <div className="activity-details" key={activity.name}>
                            <h2 className="subtitle-activity">
                            Name: {activity.name} | Difficulty: {activity.difficulty}
                            </h2>
                            <h2 className="subtitle-activity">
                            Duration: {activity.duration} | Season: {activity.season}
                            </h2>
                        </div>
                        ))}
                    </>
                    ) : (
                    <h2 className="activityEmpty">There are currently no activities for this country</h2>
                    )}
                </div>
                <NavLink to={`/home`} className="button-container">
                    <button className="button-detail">Go Back</button>
                </NavLink>
            </div>
        ) : (
            <div className="loading-content">
                <h1>Loading...</h1>
                <img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" alt="" />
            </div>
        )}
        </div>
    );
};

export default Detail;
