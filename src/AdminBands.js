import React from 'react';
import AdminOptions from "./components/AdminOptions";
import {Link} from "react-router-dom";

const AdminBands = () => {
    return (
        <div>
            <AdminOptions/>
            <Link to='/band/create'>
                <button>Add Band</button>
            </Link>
            <p>Bands list will be there</p>
        </div>
    );
};

export default AdminBands;