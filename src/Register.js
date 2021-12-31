import React, {useState} from 'react';
import {createUser} from "./utils/UsersUtils";
import {useHistory} from "react-router-dom";

const Register = () => {
    const history = useHistory()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(false);
    const errorMessages = {
        password: 'Passwords are not the same'
    };
    const newUser = {username, email, password};


    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        //check if password and confirm password the same
        if (password !== confirmPassword) {
            return setPasswordErrorMessage(true)
        } else {
            // if password the same, set error password to false
            setPasswordErrorMessage(false);
            //create new user
            const response = await createUser(newUser);
            if (response.ok && response.status === 201) {
                //message informing creation ok
                alert('User account created with success!')
                //redirect to login page
                history.push('/login')
            } else if (response.status === 500) {
                alert('This user account already exists')
            } else {
                alert('User creation failed...')
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input onChange={handleUsername} type='text' value={username}/>

                <label>email</label>
                <input onChange={handleEmail} type='text' value={email}/>
                {passwordErrorMessage && <p>{errorMessages.password}</p>}
                <label>password</label>
                <input onChange={handlePassword} type='password' value={password} minLength='6'/>

                {passwordErrorMessage && <p>{errorMessages.password}</p>}
                <label>confirm password</label>
                <input onChange={handleConfirmPassword} type='password' value={confirmPassword} minLength='6'/>

                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;

// TODO error message if password and confirm are not the same