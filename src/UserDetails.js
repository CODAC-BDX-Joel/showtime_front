import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {findOneUser, updateOneUser} from "./utils/UsersUtils";


const UserDetails = () => {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const history = useHistory();
    const {userId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        favBands: [],
        bookedEvents: [],
        roles: [],
    });
    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleRole = (e) => {
        setUserInfo({...userInfo, roles: [e.target.value]})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userUpdateConfirm = window.confirm('Do you confirm user update?');
        if (!userUpdateConfirm) {
            history.push('/adminUsers');
        } else {
            setIsLoading(true);
            const response = await updateOneUser(userId, userInfo);
            if (response === 'Error') {
                setIsLoading('false');
                alert('User update failed');
                history.push('/adminUsers');
            } else {
                setIsLoading(false);
                alert('User updated with success');
                history.push('/adminUsers');
            }
        }
    }

    useEffect(async () => {
        //fetch user infos
        async function fetchUser(id) {
            setIsLoading(true)
            const response = await findOneUser(id);
            if (response === 'Error') {
                setIsLoading(false);
                alert('Fetching user details failed');
                history.push('/adminUsers')
            } else {
                setUserInfo({
                    username: response.username,
                    email: response.email,
                    favBands: response.favBands,
                    bookedEvents: response.bookedEvents,
                    roles: response.roles,
                });
                setIsLoading(false);
            }
        };
        await fetchUser(userId);
    }, [userId])
    return (
        <div>
            {isLoading ?
                <div>Loading...</div> :
                (<form onSubmit={handleSubmit}>
                    <label>username</label>
                    <input onChange={handleChange} type='text' name='username' value={userInfo.username}/>
                    <label>email</label>
                    <input onChange={handleChange} type='text' name='email' value={userInfo.email}/>
                    <br/>
                    <label>Role:</label>
                    <input type='radio' name='roles' onChange={handleRole}
                           checked={userInfo.roles[0] === 'user' ? true : false} value='user'/><label>user</label>
                    <input type='radio' name='roles' onChange={handleRole}
                           checked={userInfo.roles[0] === 'admin' ? true : false} value='admin'/><label>admin</label>
                    <br/>
                    <button>Update</button>
                </form>)
            }
        </div>
    );
};
export default UserDetails;