import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import react, { useEffect, useState } from 'react'
import axios from 'axios';

function UserLoggedin() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`http://localhost:8081/user/${id}`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);
  const handleLogout = () => {
    navigate('/login')
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='mt-4'> 
        <button onClick={handleLogout} className='btn btn-danger' style={{ position: 'absolute', top: '10px', right: '100px' }}>Logout</button>
        <Link to={`/loggedin/updatelogin/${id}`} className='btn btn-primary' style={{ position: 'absolute', top: '10px', right: '190px' }}>Update Login</Link>
        <Link to={`/loggedin/updateprofile/${id}`} className='btn btn-primary' style={{ position: 'absolute', top: '10px', right: '320px' }}>Update Profile</Link>
        <Link to={`/loggedin/profile-management/${id}`} className='btn btn-warning' style={{ position: 'absolute', top: '10px', right: '460px' }}>Volunteer Info</Link>

      </div>
      <div className='mt-4 w-50 bg-light rounded p-3'>
        <h2>@{user.Username}</h2>
        {user.profilePic && <img src={`http://localhost:8081${user.profilePic}`} alt="Profile" width="150" height="140" className='mb-3' style={{ borderRadius: '50%' }} />}
        <div className='mb-2'>
          <strong>Name:</strong> {user.Name}
        </div>
        <div className='mb-2'>
          <strong>Bio:</strong> {user.bio}
        </div>
      </div>
    </div>
  );
}

export default UserLoggedin
