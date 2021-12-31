import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {loginUser} from "./utils/UsersUtils";

const Login = () => {
    //TODO insert loader while waiting for login
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const data = await loginUser({username, password});
        if (data === 'Login failed') {
            alert('Login failed')
        } else {
            console.log('log in ok ');
            localStorage.setItem('currentUser', JSON.stringify(data));
            history.push('/');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                <label>username</label>
                <input onChange={handleUsername} type='text' minLength='2' maxLength='10' value={username} required/>
                <label>password</label>
                <input onChange={handlePassword} type='password' value={password} required/>
                <button>Login</button>
            </form>
            <Link to='/register'>Register?</Link>
        </div>

    );
};

export default Login;