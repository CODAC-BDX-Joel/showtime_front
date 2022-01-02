import React, {useState} from 'react';
import UserOptions from "./components/UserOptions";
import {updateOneUser} from "./utils/UsersUtils";
import {useHistory} from "react-router-dom";

const MyProfile = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const connectedUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;

    const [userInfo, setUserInfo] = useState({
        username: connectedUser.user.username,
        email: connectedUser.user.email,
        password: undefined,
    });

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirmChange = window.confirm('Confirm profile update?');
        if (!confirmChange) {
            console.log('update cancelled');
        } else {
            //if no pass update requested then remove password from payload
            if (userInfo.password === undefined) {
                setIsLoading(true);
                const {password, ...partialUserInfo} = userInfo;
                const userUpdateResponse = await updateOneUser(connectedUser.user._id, partialUserInfo);
                if (userUpdateResponse === 'Error') {
                    setIsLoading('false');
                    alert('Profile update failed');
                    history.push('/');
                } else {
                    setIsLoading(false);
                    alert('Profile updated with success');
                    history.push('/');
                }
            } else {
                //if pass update requested then send the full payload (userInfo)
                const response = await updateOneUser(connectedUser.user._id, userInfo);
                if (response === 'Error') {
                    setIsLoading('false');
                    alert('Profile update failed');
                    history.push('/logout');
                } else {
                    setIsLoading(false);
                    alert('Profile updated with success');
                    history.push('/logout');
                }
            }
        }
    };
    return (
        <div>
            <UserOptions/>
            <h1>My profile...</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input onChange={handleChange} type='text' name='username' value={userInfo.username}/>
                <label>Email</label>
                <input onChange={handleChange} type='text' name='email' value={userInfo.email}/>
                <label>Change password</label>
                <input onChange={handleChange} type='text' name='password' value={userInfo.password}/>
                <button>Update</button>
            </form>
        </div>
    );
};

export default MyProfile;

//TODO only the user connected can access/modify his/her own profile