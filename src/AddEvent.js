import React, {useEffect, useState} from 'react';
import {getAllGenres} from "./utils/GenresUtils";
import {getAllBands} from "./utils/BandsUtils";
import {useHistory} from "react-router-dom";
import {createEvent} from "./utils/EventsUtils";

const AddEvent = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [bandsList, setBandsList] = useState([]);
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventBand, setEventBand] = useState('');
    const handleDate = (e) => {
        setEventDate(e.target.value);
    };
    const handleTime = (e) => {
        setEventTime(e.target.value);
    };

    const handleBand = (e) => {
        setEventBand(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //new date from eventDate
        const dateBase = new Date(eventDate);
        //get year
        const eventYear = dateBase.getFullYear();
        //get month
        const eventMonth = dateBase.getMonth();
        //get day
        const eventDay = dateBase.getDate();
        // get hours from event time
        const eventTimeHours = eventTime.slice(0, 2);
        // get minutes from event time
        const eventTimeMinutes = eventTime.slice(3, 5);
        //new date via all the elements before
        const formattedDate = new Date(eventYear, eventMonth, eventDay, Number(eventTimeHours), Number(eventTimeMinutes));
        // console.log(formattedDate, eventBand);

        // Create the new event body
        const newEvent = {date: formattedDate, band: eventBand};

        // Create new event in db
        const response = await createEvent(newEvent);
        if (response === 'Error') {
            setIsLoading(false);
            alert('Event creation failed');
            history.push('/adminEvents');
        }else{
            setIsLoading(false);
            alert('Event created with success');
            history.push('/adminEvents');
        }
    }

    useEffect(() => {
        setIsLoading(true)
        async function fetchAllBands() {
            const data = await getAllBands();
            if (data === 'Error') {
                setIsLoading(false);
                console.log('Failed to fetch genres list');
            } else {
                setIsLoading(false)
                console.log('bands:', data)
                setBandsList(data)
            }
        }
        fetchAllBands();
    }, [])
    return (
        isLoading ? <div>Loading...</div> : (<div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="eventDate">Event date:</label>
                <input onChange={handleDate} type="date" value={eventDate} required/>
                <label htmlFor="eventTime">Event Time:</label>
                <input onChange={handleTime} type="time" required/>
                <select onChange={handleBand} required>
                    <option value="">--Choose band--</option>
                    {bandsList.map(band => {
                        return (
                            <option key={band._id} value={band._id}>{band.name}</option>
                        )
                    })}
                </select>
                <button>Create event</button>
            </form>
        </div>)

    );
};

export default AddEvent;