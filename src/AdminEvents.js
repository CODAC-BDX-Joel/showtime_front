import React, {useEffect, useState} from 'react';
import AdminOptions from "./components/AdminOptions";
import {Link} from "react-router-dom";
import {getAllEvents} from "./utils/EventsUtils";

const AdminEvents = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventsList, setEventsList] = useState([]);
    //Fetch all events
    useEffect(() => {
        setIsLoading(true)

        async function fetchAllEvents() {
            const data = await getAllEvents();
            if (data === 'Error') {
                setIsLoading(false)
                console.log('Failed to fetch events list')
            } else {
                console.log('Events list:', data)
                setIsLoading(false);
                setEventsList(data);
            }
        }

        fetchAllEvents();
    }, []);
    const handleDeleteEvent = (id) => {
        console.log('deleting event...', id);
    }
    return (
        <div>
            <AdminOptions/>
            <Link to='/event/create'>
                <button>Add Event</button>
            </Link>
            {isLoading ?
                <div>Loading...</div> :
                (<div>
                    {eventsList.map(event => {
                        return (
                            <div key={event._id}>
                                <p>Band: {event.band.name}</p>
                                <p>Date: {event.date}</p>
                                <button>update</button>
                                <button onClick={() => handleDeleteEvent(event._id)}>delete</button>
                                <hr/>
                            </div>
                        )
                    })}
                </div>)
            }
        </div>
    );
};

export default AdminEvents;