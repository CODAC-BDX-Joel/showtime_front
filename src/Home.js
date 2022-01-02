import React, {useEffect, useState} from 'react';
import EventCard from "./components/EventCard";
import UserOptions from "./components/UserOptions";
import {getAllEvents} from "./utils/EventsUtils";
import {useHistory} from "react-router-dom";

const Home = ({connectedUser, isLoggedIn, setIsLoggedIn}) => {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [eventsList, setEventsList] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    useEffect(() => {
        setIsLoading(true);
        // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (connectedUser || currentUser) {
            setIsLoggedIn(true);
        }

        async function fetchAllEvents() {
            const data = await getAllEvents();
            if (data === 'Error') {
                setIsLoading(false);
                console.log('Failed to fetch events list');
            } else {
                console.log('Events list:', data);
                setIsLoading(false);
                setEventsList(data);
            }
        }

        fetchAllEvents();
    }, []);

    const handleBookEvent = (eventId) => {
        history.push(`/bookEvent/${eventId}`)
    }

    const handleFavBand = (bandId) => {
        history.push(`/addFavBand/${bandId}`)
    }

    const handleBookNotConnected = () => {
        history.push('/login')
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
                {isLoggedIn && <UserOptions/>}
                {isLoading ? <div>Loading...</div> : (
                    <div>{eventsList.length === 0 ? <div>No events...</div> : <div>{eventsList.map(event => {
                        return (
                            <div key={event._id}>
                                <h1>{event.band.name}</h1>
                                <p>Date: {event.date}</p>
                                {isLoggedIn &&
                                <div>
                                    <button
                                        disabled={connectedUser?.user?.bookedEvents.includes(event._id) ? true : false}
                                        onClick={() => {
                                            handleBookEvent(event._id)
                                        }}>Book
                                    </button>
                                    <button
                                        disabled={connectedUser?.user?.favBands.includes(event.band._id) ? true : false}
                                        onClick={() => {
                                            handleFavBand(event.band._id)
                                        }}> Favorite band
                                    </button>
                                </div>}
                                {!isLoggedIn && <button onClick={handleBookNotConnected}>Book</button>}
                                <hr/>
                            </div>)
                    })}</div>} </div>)}
            </main>
        </div>
    );
};

export default Home;