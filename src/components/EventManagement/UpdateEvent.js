import axios from 'axios';
import React, { useState } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import { useNavigate, useParams } from 'react-router-dom';

// Added to frontend GitHub

function RequiredSkillsDropDown({ selectedSkills, setSelectedSkills }){
    const options = [
        {skill: "Organization", key: 1},
        {skill: "Teamwork", key: 2},
        {skill: "Leadership", key: 3},
        {skill: "Attention to Detail", key: 4},
        {skill: "Adaptability", key: 5},
        {skill: "Motivated", key: 6}
        
    ];
    return (
        <div className="form-group">
            <Multiselect options={options} displayValue="skill" selectedValues={selectedSkills} onSelect={setSelectedSkills} onRemove={setSelectedSkills}/>
        </div>
    );
}

function UpdateEvent() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [requiredSkills, setRequiredSkills] = useState('')
    const [urgency, setUrgency] = useState(0)
    const [date, setDate] = useState(new Date());
    const {event_id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:8081/events/update/'+event_id, {name, description, location, requiredSkills, urgency, date})
        .then(res => {
            console.log(res);
            navigate('/events');
        }).catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Event</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="Name" placeholder = 'Enter name' className='form-control'
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Description</label>
                    <input type="Description" placeholder='Enter description' className='form-control'
                    onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Location</label>
                    <input type="Location" placeholder='Enter location' className='form-control'
                    onChange={e => setLocation(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Required Skills</label>
                    <RequiredSkillsDropDown selectedSkills={requiredSkills} setSelectedSkills={setRequiredSkills}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Urgency</label>
                    <input type="Urgency" placeholder='Enter urgency' className='form-control'
                    onChange={e => setUrgency(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Date</label>
                    <input type="Date" placeholder='Enter date' className='form-control'
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
