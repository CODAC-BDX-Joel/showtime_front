import React, {useEffect} from 'react';
import UserOptions from "./components/UserOptions";

const MyEvents = () => {
    const userConnected = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        console.log(userConnected);
        console.log(userConnected.access_token)
        //TODO fetch events related to the current user

        //TODO store myevents in state
    }, [userConnected])
    return (
        <div>
            <UserOptions/>
            <h1>Here are my events...</h1>
        </div>
    );
};

export default MyEvents;