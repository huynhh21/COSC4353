import './styles.css';
import { useState } from 'react';
import Select from "react-select";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const skillOptions = [
  {value: "firstskill", label: "Skill1"},
  {value: "secondskill", label: "Skill2"},
  {value: "thirdskill", label: "Skill3"}
];

const urgencyOptions = [
  {value: "urgent", label: "3"},
  {value: "mid", label: "2"},
  {value: "low", label: "1"}
];

function Form() {  
  const MAX_TEXT_LENGTH = 100;
  const [eventName, setEventName] = useState("");
  const [eventDesc, setDesc] = useState("");
  const [location, setLocation] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  }
  const [selectedUrgency, setUrgency] = useState([]);
  const handleUrgency = (selectedUrgency) => {
    setUrgency(selectedUrgency);
  }

  const[date, setDate] = useState(new Date());

  function handleEventName(event) {
    const value = event.target.value;
    if(value.length <= MAX_TEXT_LENGTH) {
      setEventName(value);
    }
  }

  function handleEventDesc(event) {
    const value = event.target.value;
    setDesc(value);
  }

  function handleLocation(event) {
    const value = event.target.value;
    setLocation(value);
  }
  
  return (
    <div className="grid">
      <a style={{fontWeight: "bold"}}> Event Name* </a>
      <textarea rows={2} cols={64}
        onChange={handleEventName}
        value={eventName}>
      </textarea>
      <div> {`${eventName.length}/${MAX_TEXT_LENGTH}`}</div>

      <a style={{fontWeight: "bold"}}> Event Description* </a>
      <textarea rows={8} cols={64}
        onChange={handleEventDesc}
        value={eventDesc}>
      </textarea>

      <a style={{fontWeight: "bold"}}> Location (Address, City, State, Zip Code)* </a>
      <textarea rows={1} cols={64}
        onChange={handleLocation}
        value={location}>
      </textarea>

      <a style={{fontWeight: "bold"}}> Required Skills* </a>
      <div>
        <Select
          options={skillOptions}
          value={selectedOptions}
          onChange={handleChange}
          isMulti={true}
        />
      </div>

      <a style={{fontWeight: "bold"}}> Urgency* </a>
      <div>
        <Select
          options={urgencyOptions}
          value={selectedUrgency}
          onChange={handleUrgency}
        />
      </div>

      <a style={{fontWeight: "bold"}}> Event Date* </a>
      <div>
        <DatePicker selected={date} onChange={(date)=>setDate(date)}/>
      </div>
      <button> Submit </button>
    </div>
  );
}

export default Form;