import React,{ useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown'
import Datepicker, { DateObject } from 'react-multi-date-picker';
import {Input} from 'react-multi-date-picker';
import './Management.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCalendarAlt} from 'react-icons/fa';
function StateDropdown() {
    const [value, setValue] = useState('')
    const options = [
        { label: "AL", value: "Alabama" },
        { label: "AK", value: "Alaska" },
        { label: "AZ", value: "Arizona" },
        { label: "AR", value: "Arkansas" },
        { label: "CA", value: "California" },
        { label: "CO", value: "Colorado" },
        { label: "CT", value: "Connecticut" },
        { label: "DE", value: "Delaware" },
        { label: "FL", value: "Florida" },
        { label: "GA", value: "Georgia" },
        { label: "HI", value: "Hawaii" },
        { label: "ID", value: "Idaho" },
        { label: "IL", value: "Illinois" },
        { label: "IN", value: "Indiana" },
        { label: "IA", value: "Iowa" },
        { label: "KS", value: "Kansas" },
        { label: "KY", value: "Kentucky" },
        { label: "LA", value: "Louisiana" },
        { label: "ME", value: "Maine" },
        { label: "MD", value: "Maryland" },
        { label: "MA", value: "Massachusetts" },
        { label: "MI", value: "Michigan" },
        { label: "MN", value: "Minnesota" },
        { label: "MS", value: "Mississippi" },
        { label: "MO", value: "Missouri" },
        { label: "MT", value: "Montana" },
        { label: "NE", value: "Nebraska" },
        { label: "NV", value: "Nevada" },
        { label: "NH", value: "New Hampshire" },
        { label: "NJ", value: "New Jersey" },
        { label: "NM", value: "New Mexico" },
        { label: "NY", value: "New York" },
        { label: "NC", value: "North Carolina" },
        { label: "ND", value: "North Dakota" },
        { label: "OH", value: "Ohio" },
        { label: "OK", value: "Oklahoma" },
        { label: "OR", value: "Oregon" },
        { label: "PA", value: "Pennsylvania" },
        { label: "RI", value: "Rhode Island" },
        { label: "SC", value: "South Carolina" },
        { label: "SD", value: "South Dakota" },
        { label: "TN", value: "Tennessee" },
        { label: "TX", value: "Texas" },
        { label: "UT", value: "Utah" },
        { label: "VT", value: "Vermont" },
        { label: "VA", value: "Virginia" },
        { label: "WA", value: "Washington" },
        { label: "WV", value: "West Virginia" },
        { label: "WI", value: "Wisconsin" },
        { label: "WY", value: "Wyoming" }
    ];
    function handleSelect(event) {
        setValue(event.target.value)
    }
    return (
        <div className="form-group">
            <div className="w-50 p-3">
                <h6>Select a State</h6>
                <select className="form-select" onChange={handleSelect}>
                    {options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <p>{value}</p>
            </div>
        </div>
    );
}

function SkillsDropDown(){
    const data = [
        {skill: "Organization", key: 1},
        {skill: "Teamwork", key: 2},
        {skill: "Leadership", key: 3},
        {skill: "Attention to Detail", key: 4},
    ]
    const [options]= useState(data);
    return (
        <div style={{width:"80%", display: "flex"}}>
            <div className="form-group">
                <h6>Select Skills</h6>
                <Multiselect options={options} displayValue="skill" />
            </div>
        </div>
    );
}

function CustomInput({value, openCalendar}) {
    const displayValue = Array.isArray(value) ? value.map((date) => date.format("YYYY-MM-DD")).join(', ') : '';
    return(
        <div className="input-group">
            <input type="text" className="form-control" value={displayValue} onClick={openCalendar} readOnly/>
            <div className="input-group-append">
                <span className="input-group-text" onClick={openCalendar}>
                    <FaCalendarAlt/>
                </span>
            </div>
        </div>
    );
}
function DatePicker(){
    const [selectedDates, setSelectedDates] = useState([]);
    return (
        <div className="App">
            <label>
                <Datepicker 
                    value={selectedDates} 
                    onChange={setSelectedDates} 
                    multiple 
                    render={<CustomInput />}
                    className="blue"
                />
            </label>
            <div className="selected-dates mt-3">
                <h6>Selected Dates:</h6>
                <ul>
                    {selectedDates.map((date, index) => (
                        <li key={index}>{date.format("YYYY-MM-DD")}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Management() {
    const [zipcode, setZipcode] = useState('')
    const [message, setMessage] = useState('');

    {/*handle valid zipcode*/}
    const handleSubmit = (event) => {
        event.preventDefault();
        if (zipcode.length < 5) {
            setMessage('Zipcode must be at least 5 characters');
            return;
        }
        setMessage('Form submitted successfully!');
    };

    return (
      <div className="profile-management">
        <h2>Profile Management</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
              <label>Full name:</label>
              <input type="text" required maxLength="50" /> {/*50 characters, required*/}
          </div>
  
          <div className="form-group">
              <label>Address 1:</label>
              <input type="text" required maxLength="100" /> {/*100 characters, required*/}
          </div>

          <div className="form-group">
              <label>Address 2:</label>
              <input type="text" optional maxLength="100" /> {/*100 characters, optional*/}
          </div>

          <div className="form-group">
              <label>City:</label>
              <input type="text" required maxLength="100" /> {/*100 characters, required*/}
          </div>


          <div className="form-group">
              <label>State:</label>
              {StateDropdown()}  {/*Drop Down, selection required*/}
          </div>

          <div className="form-group">
              <label>Zipcode:</label>
              <input type="text" required maxLength="9" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/> {/*9 characters, at least 5-character code required*/}
          </div>

          <div className="form-group">
              <label>Skills:</label>
              {SkillsDropDown()}  {/*Drop Down, selection required*/}
          </div>

          <div className="form-group">
            <label>Preferences:</label>
            <textarea optional></textarea> {/*Text area, optional*/}
          </div>

          <div className="form-group">
            <label>Availability:</label>
            <h6>Select date</h6>
            <DatePicker/>  {/*Date picker, multiple dates allowed, required*/}
          </div>

          <button type="submit">Update Profile</button>
          {message && <div className="mt-3 alert alert-info">{message}</div>}
        </form>
      </div>
    );
  }
  
  export default Management;
