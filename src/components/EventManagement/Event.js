import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// This file contains the main "Event" page that lists all of the information about the event and gives access
// to update, add, and delete each one.

function Event() {
    const [event, setEvent] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setEvent(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/event/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Urgency</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            event.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.Name}</td>
                                    <td>{data.Description}</td>
                                    <td>{data.Location}</td>
                                    <td>{data.Urgency}</td>
                                    <td>{data.Date}</td>
                                    <td>
                                        <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
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
