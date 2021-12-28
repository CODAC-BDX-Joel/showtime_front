import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <label>username</label>
                <input type='text'/>
                <label>email</label>
                <input type='text'/>
                <label>email</label>
                <input type='email'/>
                <label>password</label>
                <input type='password'/>
                <label>confirm password</label>
                <input type='password'/>
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;

// TODO error message if password and confirm are not the same