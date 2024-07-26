import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

// Added to frontend GitHub

function VolunteerEventHome() {
    const [volunteer, setVolunteer] = useState([])
    const [event, setEvent] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setEvent(res.data))
        .catch(err => console.log(err));
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:8081/volunteer')
        .then(res => setVolunteer(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className='bg-white rounded p-3'>
                <table className='table'>
                    <thead>
                        <header style={{ fontWeight: 'bold' }}>Volunteer</header>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Skills</th>
                            <th>Preferences</th>
                            <th>Availability</th>
                            <th>Matched Event</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteer.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.full_name}</td>
                                    <td>{data.address1}</td>
                                    <td>{data.city}</td>
                                    <td>{data.state}</td>
                                    <td>{data.zipcode}</td>
                                    <td>{data.skills}</td>
                                    <td>{data.preferences}</td>
                                    <td>{data.availability}</td>
                                    <td>{data.event_match}</td>
                                    <td>
                                        <Link to={`match/${data.user_id}`} className='btn btn-primary'>Match</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='bg-white rounded p-3 ms-3'>
                <table className='table'>
                    <thead>
                        <header style={{ fontWeight: 'bold' }}>Event</header>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Required Skills</th>
                            <th>Urgency</th>
                            <th>Date</th>
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
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default VolunteerEventHome
