import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Event from './Event';
import CreateEvent from './CreateEvent'
import UpdateEvent from './UpdateEvent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Event />}></Route>
          <Route path='/events/create' element={<CreateEvent />}></Route>
          <Route path='/update/:event_id' element={<UpdateEvent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
