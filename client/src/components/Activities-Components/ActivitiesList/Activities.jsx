import './Activities.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities } from '../../../redux/actions'

const Activities = () => {

    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch]);

    return(
        <>
        <header class="header">
            <h2>Activities List</h2>
        </header>
        <table className='table-container'>
            <thead>
                <tr className='table-head'>
                    <th>Name</th>
                    <th>Durations</th>
                    <th>Difficulty</th>
                    <th>Season</th>
                </tr>
            </thead>
            <tbody>
            {activities?.map(activity => (
                <tr className='table-body'>
                    <td>{activity.name}</td>
                    <td>{activity.difficulty}</td>
                    <td>{activity.duration}</td>
                    <td>{activity.season}</td>
                </tr>
            ))}
            </tbody>        
        </table>
        </>
    )
}

export default Activities