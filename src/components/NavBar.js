import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <div><Link to='/'>SHOWTIME</Link></div>
            <div>
                <Link to='/adminPage'><p>Adminpage</p></Link>
                <Link to='/login'><p>Login</p></Link>
                <Link to='/register'><p>Register</p></Link>
                <Link to='/logout'><p>Logout</p></Link>
                {/*TODO logout <-> remove token and userinfo in AuthContext*/}
            </div>

        </div>
    )
};

export default NavBar;