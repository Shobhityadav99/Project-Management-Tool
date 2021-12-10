import React, {useState} from 'react';
import {Navbar} from '../../components/Navbar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyAccount.css';
import profileImage from '../../resources/pfp.jpg';

export const MyAccount = () => {

    const [username, setUsername] = useState("Nishchay");
    const [email, setEmail] = useState("Nishchay@test.com");

    const onUsernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const onEmailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
        <Navbar />
        <div className="myaccount-container">
            <div className="myaccount-input-container">
            <label className="myaccount-username-label">Name:</label>
            <br />
            <input className="myaccount-username" value={username} onChange={onUsernameChangeHandler}/>
            <br /><br />
            <label className="myaccount-email-label">Email:</label>
            <br />
            <input className="myaccount-email" value={email} onChange={onEmailChangeHandler}/>
            <br /><br />
            <Button variant="primary" className="btn btn-sm">Update Info</Button>
            <br />
            <hr />
            <label className="myaccount-password-change-label">Change Password:</label>
            <br /><br />
            <label className="myaccount-current-password-label">Enter current password:</label>
            <br />
            <input type="password" className="myaccount-current-password" />
            <br /> <br />
            <label className="myaccount-new-password-label">Enter new password:</label>
            <br />
            <input type="password" className="myaccount-new-password" />
            <br /><br />
            <label className="myaccount-retype-password-label">Retype new password:</label>
            <br />
            <input type="password" className="myaccount-retype-password" />
            <br /><br />
            <Button variant="primary" className="btn btn-sm">Update Password</Button>
            </div>
            <div className="myaccount-profile-image-container">
                <img src={profileImage} alt="#" className="myaccount-profile-image" />
            </div>
                <i className="fas fa-pen-square myaccount-profile-image-edit-icon"></i>  
        </div>     
        </div>
    )
}


