import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Management from "./ProfileManagement";

function Bar() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          
          <Navbar.Brand>Volunteer Scheduler</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                <Nav.Link as={Link} to={"/profile-management"}>Profile Management</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
            
          <Route path="/profile-management" element={<Management />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Bar;
