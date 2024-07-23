import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import react, { useEffect, useState } from 'react'
import axios from 'axios';

//had to change for authenticated
function UserLoggedin() {
  const [auth, setAuth] = useState(false);
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [messages, setMessages] = useState('')
  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    axios.get(`http://localhost:8081/user/${id}`)
      .then(res => {
        if(res.data.Status === "Success") {
          setUser(res.data.user);
          setAuth(true)
        } else {
          setAuth(false)
          setMessages(res.data.message);
        }
      })
      .catch(err => console.log(err));
  }, [id]);

  //handle logout get rid of cookies and refresh
  const handleLogout = () => {
    axios.get(`http://localhost:8081/user/${id}/logout`)
    .then(res => {
      location.reload(true);
    }).catch(err => console.log(err));
    navigate('/')
  };


  return (

    <div>
      {
        auth ? //if authorized we can go to that users page
          <div className='d-flex flex-column align-items-center'>
            <h3>You are Authorized --- {id}</h3>
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
        :  //otherwise you need to log in first
        <div>
          <h3>{messages}</h3>
          <h3>Login Now</h3>
          <Link to="/" className='btn-primary'>Login</Link>
        </div>
      }
    </div>
  );
}

export default UserLoggedin
