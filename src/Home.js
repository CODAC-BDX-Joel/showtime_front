import React, {useEffect, useState} from 'react';
import EventCard from "./components/EventCard";
import UserOptions from "./components/UserOptions";
import {getAllEvents} from "./utils/EventsUtils";
import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [eventsList, setEventsList] = useState([]);
    useEffect(() => {
        setIsLoading(true);
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

    const handleBookEvent = (eventId) => {
        history.push(`/bookEvent/${eventId}`)
    }
    return (
        <div>
            <select required>
                <option value="">Filter by</option>
                <option value="filterByGenre">Genre</option>
                <option value="filterByDate">Date</option>
                <option value="filterByGroup">Group</option>
            </select>
            <main>
                {/*TODO display below <UserOptions/ > btns and/or links only if normal user connected */}
                <UserOptions/>
                {isLoading ? <div>Loading...</div> : (
                    <div>{eventsList.length === 0 ? <div>No events...</div> : <div>{eventsList.map(event => {
                        return (
                            <div key={event._id}>
                                <h1>{event.band.name}</h1>
                                <p>Date: {event.date}</p>
                                <button onClick={() => {handleBookEvent(event._id)}}>Book</button>
                                <button> Favorite band</button>
                                <hr/>
                            </div>)
                    })}</div>} </div>)}
            </main>
        </div>
    );
};

export default Home;