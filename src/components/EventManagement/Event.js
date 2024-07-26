import  React, {useEffect, useState } from 'react'
import axios  from 'axios'
import { Link } from 'react-router-dom'

function Event() {
    const [event, setEvent] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setEvent(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async (event_id) => {
        try {
            await axios.delete('http://localhost:8081/event/'+event_id)
            window.location.reload()
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <div data-testid = "todo-1" className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Required Skills</th>
                            <th>Urgency</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            event.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.event_name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.location}</td>
                                    <td>{data.required_skills}</td>
                                    <td>{data.urgency}</td>
                                    <td>{data.eventDate}</td>
                                    <td>
                                        <Link to={`update/${data.event_id}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.event_id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
} 

export default Event
