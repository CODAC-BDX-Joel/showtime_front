import React from 'react';
import {Link} from "react-router-dom";

const NavBar = ({connectedUser, isLoggedIn, isAdmin}) => {
    console.log('navbar')
    console.log('is logged in', isLoggedIn)
    console.log('is admin', isAdmin)
    return (
        <div className='navbar'>
            <div><Link to='/'>SHOWTIME</Link></div>
            <div>
                {isAdmin && <Link to='/adminPage'><p>Adminpage</p></Link>}
                {!isLoggedIn && <Link to='/login'><p>Login</p></Link>}
                {!isLoggedIn && <Link to='/register'><p>Register</p></Link>}
                {isLoggedIn && <Link to='/logout'><p>Logout</p></Link>}
            </div>
        </div>
    )
};
export default NavBar;