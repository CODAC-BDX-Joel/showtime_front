import React from 'react';
import NavBar from "./components/NavBar";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <form>
                <label>username</label>
                <input type='text' minLength='2' maxLength='10' required/>
                <label>password</label>
                <input type='text' minlength='6' required/>
                <button>Login</button>
            </form>
            <Link to='/register'>Register?</Link>
        </div>

    );
};

export default Login;