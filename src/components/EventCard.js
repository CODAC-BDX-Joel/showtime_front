import React from 'react';

const EventCard = (props) => {
    const {event} = props
    return (
        <div className='cardWrapper'>
            <h2>{event.band}</h2>
            <p>{event.date}</p>
            <div>
                <button>Book</button>
                <button>Add to favBand</button>
            </div>
            <hr/>
        </div>
    );
};

export default EventCard;