import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getOneEvent} from "./utils/EventsUtils";
import {findOneUser, UserbooksEvent} from "./utils/UsersUtils";

const BookEvent = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const history = useHistory();
    const {eventId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(async () => {
       async function bookEvent (id){
           setIsLoading(true);
           //fetch the event to book via event's id received in params
           const eventToBook = await getOneEvent(id);
           if (eventToBook === 'Error') {
               setIsLoading(false);
               alert('This event does not exist');
               history.push('/')
           } else {
               setIsLoading(true);
               const bookingResponse = await UserbooksEvent(eventToBook._id);
               if (bookingResponse === 'Error') {
                   setIsLoading(false);
                   alert('Booking failed');
                   history.push('/')
               } else {
                   //Booking succes
                   //Get the updated infos related to the current user
                   const updatedUser = await findOneUser(currentUser.user._id);
                   const userToStore = {
                       access_token: currentUser.access_token,
                       user: updatedUser
                   }
                   //Replace the currentUser in local storage by the updated one
                   localStorage.setItem('currentUser', JSON.stringify(userToStore))
                   setIsLoading(false);
                   alert('Event booked with success');
                   history.push('/');
               }
           }
       };
       await bookEvent(eventId);
    }, []);
    return (
        isLoading && <div>Loading...</div>
    );
};

export default BookEvent;