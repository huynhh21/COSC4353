import react, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Profile() {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [bio, setBio] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/user/${id}`)
        .then(res => {
            setUser(res.data);
            setBio(res.data.bio || '');
            setProfilePic(res.data.profilePic || '');
        })
        .catch(err => console.log(err));
    }, [id]);

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('bio', bio);
        if(profilePic) {
            formData.append('profilePic', profilePic);
        }

        axios.put(`http://localhost:8081/user/${id}/update`, formData)
        .then(res => {
            console.log(res);
            navigate(`/loggedin/${id}`);
        })
        .catch(err => console.log(err));
    };

    const handleFileChange = (e) => {
        setProfilePic(e.target.files[0]);
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Profile</h2>
                <form onSubmit={handleProfileUpdate}>
                <div className='mb-2'>
                    <label>Name: {user.Name}</label>
                </div>
                <div className='mb-2'>
                    <label>Email: {user.Email}</label>
                </div>
                <div className='mb-2'>
                    <label>Bio</label>
                    <textarea
                    className='form-control'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder='Enter your bio'
                    ></textarea>
                </div>
                <div className='mb-2'>
                    <label>Profile Picture</label>
                    <input type='file' className='form-control' onChange={handleFileChange} />
                    {user.profilePic && <img src={`http://localhost:8081${user.profilePic}`} alt="Profile" width="100" />}
                </div>
                <button className='btn btn-success'>Update Profile</button>
                </form>
            </div>
        </div>
    );
}
export default Profile;
