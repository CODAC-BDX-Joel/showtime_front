import React from 'react';
import AdminOptions from "./components/AdminOptions";
import {Link} from "react-router-dom";

const AdminEvents = () => {
    return (
        <div>
            <AdminOptions/>
            <Link to='/event/create'>
                <button>Add Event</button>
            </Link>
            <p>Events list will be there</p>
        </div>
    );
};

export default AdminEvents;