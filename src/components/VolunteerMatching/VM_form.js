import './styles.css';

function Form() {
  return (
    <div>
      <div className="format">
        <text className="header-center"> Volunteer Information </text>
          <div className="body-left">
            <text style={{fontWeight: "bold"}}> Name: </text> <text class="newline"> John Doe </text>
            <text style={{fontWeight: "bold"}}> Skills: </text> <text class="newline"> Skill1, Skill2, Skill3 </text>
            <text style={{fontWeight: "bold"}}> Preferences: </text> <text class="newline"> Placeholder text block for volunteer.</text>
            <text style={{fontWeight: "bold"}}> Availability: </text> <text class="newline"> MM/DD/YYYY </text>
            <text class="newline"></text>
          </div>
      </div>
        
      <div className="format">
        <text className="header-center"> Matching Event Information </text>
          <div className="body-left">
            <text style={{fontWeight: "bold"}}> Event Name: </text> <text class="newline"> Fun Event </text>
            <text style={{fontWeight: "bold"}}> Event Date: </text> <text class="newline"> MM/DD/YYYY </text>
            <text style={{fontWeight: "bold"}}> Required Skills: </text> <text class="newline"> Skill1, Skill2, Skill3 </text>
            <text style={{fontWeight: "bold"}}> Urgency: </text> <text class="newline"> 1, 2, 3 </text>
          </div>
        <div className="button">
          <text class="newline"></text>
          <button> Match </button>
          <button> Do not match </button>
        </div> 
      </div> 
    </div>
  );
}

export default Form;
