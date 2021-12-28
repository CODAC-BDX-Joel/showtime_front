import React, {useState} from 'react';
import {Link} from "react-router-dom";

const UserOptions = () => {
    const [displayMyEvents, setDisplayMyEvents] = useState(true)
    return (
        <div>
            <Link to='/myEvents'>
                <button disabled={!displayMyEvents && true}>My events</button>
            </Link>
            <Link to='/myFavBands'>
                <button disabled={!displayMyEvents && true}>My fav bands</button>
            </Link>
            <Link to='/myProfile'>
                <button>My profile</button>
            </Link>
        </div>
    );
};

export default UserOptions;

//TODO disabled buttons depending on page displayed