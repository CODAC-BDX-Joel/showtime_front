import React from 'react';
import UserOptions from "./components/UserOptions";

const MyProfile = () => {
    return (
        <div>
            <UserOptions/>
            <h1>Here is my profile...</h1>
        </div>
    );
};

export default MyProfile;

//TODO only the user connected can access/modify his/her own profile