import React from 'react';
import {Link} from "react-router-dom";

const AdminOptions = () => {
    return (
        <div>
            <Link to='/adminStats'>
                <button>Stats</button>
            </Link>
            <Link to='/adminUsers'>
                <button>Users</button>
            </Link>
            <Link to='/adminEvents'>
                <button>Events</button>
            </Link>
            <Link to='/adminBands'>
                <button>Bands</button>
            </Link>
            <Link to='/adminGenres'>
                <button>Genre</button>
            </Link>
        </div>
    );
};

export default AdminOptions;

//TODO insert route in LInk tag