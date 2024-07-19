// This code is what I used my App.js file for the VolunteerMatching

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VolunteerEventHome from './VolunteerEventHome';
import MatchVolunteer from './MatchVolunteer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VolunteerEventHome />}></Route>
          <Route path='/match/:id' element={<MatchVolunteer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
