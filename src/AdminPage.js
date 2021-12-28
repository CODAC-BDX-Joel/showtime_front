import React from 'react';
import AdminOptions from "./components/AdminOptions";

const AdminPage = () => {
    return (
        <div>
            <AdminOptions/>
            <p>Adminpage 1 here</p>
        </div>
    );
};

export default AdminPage;

//TODO protect this route <-> only admin authorized