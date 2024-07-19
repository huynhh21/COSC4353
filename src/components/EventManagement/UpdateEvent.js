import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

// Frontend for updating an event 

function UpdateEvent() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [urgency, setUrgency] = useState(0)
    const [date, setDate] = useState(new Date());
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:8081/update/'+id, {name, description, location, urgency, date})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Event</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder = 'Enter name' className='form-control'
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Description</label>
                    <input type="description" placeholder='Enter description' className='form-control'
                    onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Location</label>
                    <input type="Location" placeholder='Enter Location' className='form-control'
                    onChange={e => setLocation(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Urgency</label>
                    <input type="Urgency" placeholder='Enter Urgency' className='form-control'
                    onChange={e => setUrgency(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Date</label>
                    <input type="Date" placeholder='Enter Date' className='form-control'
                    onChange={e => setDate(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
)
}

export default UpdateEvent
