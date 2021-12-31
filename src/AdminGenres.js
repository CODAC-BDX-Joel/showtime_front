import React from 'react';
import AdminOptions from "./components/AdminOptions";
import {Link} from "react-router-dom";

const AdminGenres = () => {
    return (
        <div>
            <AdminOptions/>
            <Link to='/genre/create'>
                <button>Add Genre</button>
            </Link>
            <p>Genres list will be there</p>
        </div>
    );
};

export default AdminGenres;