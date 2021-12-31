import React, {useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {AuthContext} from "./contexts/AuthContext";

const Logout = () => {
    const {setUserConnected} = useContext(AuthContext)
    const history = useHistory()
    useEffect(
        () => {
            //Step 1 Remove current user from local storage
            localStorage.removeItem('currentUser');

            //Step 3 remove user from context
            setUserConnected(null);
            //Step 4 redirect to home page

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