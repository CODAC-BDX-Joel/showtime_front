import React, {useEffect, useState} from 'react';
import UserOptions from "./components/UserOptions";
import {getOneEvent} from "./utils/EventsUtils";

const MyEvents = () => {
    const userConnected = JSON.parse(localStorage.getItem('currentUser'));
    const eventsToFetch = userConnected.user.bookedEvents;


    useEffect(() => {
    }, [])
    return (
        <div>
            <UserOptions/>
            <p>My events</p>
        </div>
    );
};

export default MyEvents;