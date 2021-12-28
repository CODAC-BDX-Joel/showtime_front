import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

const Logout = () => {
    const history = useHistory()
    useEffect(
        () => {
            //Step 1 Log out the current user via api route

            //Step 2 check response if ok

            //Step 3 remove user from context

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