import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

// Added to frontend GitHub

function VolunteerEventHome() {
    const [volunteer, setVolunteer] = useState([])
    const [event, setEvent] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/events')
        .then(res => setEvent(res.data))
        .catch(err => console.log(err));
    }, [])
    
    useEffect(() => {
        axios.get('http://localhost:8081/volunteers')
        .then(res => setVolunteer(res.data))
        .catch(err => console.log(err));
    }, [])


    //do to multiselect we need to format output
    const parseJson = (text) => {
        try {
            return JSON.parse(text);
        } catch (e) {
            return [];
        }
    };


    // Function to format skills from JSON array for user profile info
    const formatSkills = (skillsText) => {
        const skills = parseJson(skillsText);
        return skills.length > 0 ? skills.map(skill => skill.skill).join(', ') : 'No skills specified';
    };

    // Function to format availability from JSON array for user profile info
    const formatAvailability = (availabilityText) => {
        const availability = parseJson(availabilityText);
        return availability.length > 0 ? availability.join(', ') : 'No availability specified';
    };


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
                                    <td>{formatSkills(data.skills)}</td>
                                    <td>{data.preferences}</td>
                                    <td>{formatAvailability(data.availability)}</td>
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
                            <th>Event ID</th>
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
                                    <td>{data.event_id}</td>
                                    <td>{data.event_name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.location}</td>
                                    <td>{data.required_skills}</td>
                                    <td>{data.urgency}</td>
                                    <td>{data.event_date}</td>
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
