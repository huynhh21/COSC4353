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
                                    <td>{data.Name}</td>
                                    <td>{data.Address}</td>
                                    <td>{data.City}</td>
                                    <td>{data.State}</td>
                                    <td>{data.Zip}</td>
                                    <td>{data.Skills}</td>
                                    <td>{data.Preferences}</td>
                                    <td>{data.Availability}</td>
                                    <td>{data.Event}</td>
                                    <td>
                                        <Link to={`match/${data.ID}`} className='btn btn-primary'>Match</Link>
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
                                    <td>{data.Name}</td>
                                    <td>{data.Description}</td>
                                    <td>{data.Location}</td>
                                    <td>{data.RequiredSkills}</td>
                                    <td>{data.Urgency}</td>
                                    <td>{data.Date}</td>
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
