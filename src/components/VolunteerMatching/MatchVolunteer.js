import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEvent() {
    const [matchedEvent, setMatchedEvent] = useState('');
    const {user_id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:8081/match/'+user_id, {matchedEvent})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Match Event</h2>
                <div className='mb-2'>
                    <label htmlFor="">Event Name</label>
                    <input type="text" placeholder = 'Enter name' className='form-control'
                    onChange={e => setMatchedEvent(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
)
}

export default UpdateEvent
