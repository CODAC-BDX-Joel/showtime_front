import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

const Logout = ({setConnectedUser, setIsLoggedIn,setIsAdmin}) => {
    const history = useHistory()
    useEffect(
        () => {
            localStorage.removeItem('currentUser');
            setConnectedUser('');
            setIsLoggedIn(false);
            setIsAdmin(false)
            history.push('/')
        }
    )
    return (
        <div>
            Logout page
        </div>
    );
};

export default Logout;