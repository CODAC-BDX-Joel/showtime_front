import React from 'react';
import EventCard from "./components/EventCard";
import UserOptions from "./components/UserOptions";

const Home = () => {
    const events = [
        {id: 1, date: 'Mon Dec 27 2021 19:05:50 GMT+0100', band: 'ntm'},
        {id: 2, date: 'Tue Dec 28 2021 19:05:50 GMT+0100', band: 'u2'},
        {id: 3, date: 'Tue Dec 28 2021 19:05:50 GMT+0100', band: '50 cents'},
        {id: 4, date: 'Wed Dec 29 2021 19:05:50 GMT+0100', band: 'scorpion'},
        {id: 5, date: 'Wed Dec 29 2021 19:05:50 GMT+0100', band: 'norah jones'},
    ];

    return (
        <div>
            <select required>
                <option value="">Filter by</option>
                <option value="filterByGenre">Genre</option>
                <option value="filterByDate">Date</option>
                <option value="filterByGroup">Group</option>
            </select>
            <main>
                {/*TODO display below <UserOptions/ > btns and/or links only if user connected*/}
                <UserOptions/>
                {events.map(event =>
                    (<EventCard key={event.id} event={event}/>)
                )}
            </main>
        </div>
    );
};

export default Home;