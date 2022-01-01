import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

const Logout = () => {
    const history = useHistory()
    useEffect(
        () => {
            localStorage.removeItem('currentUser');
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