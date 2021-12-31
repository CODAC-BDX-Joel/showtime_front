import React, {useEffect, useState} from 'react';
import AdminOptions from "./components/AdminOptions";
import {getAllUsers} from "./utils/UsersUtils";

const AdminUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [usersList, setUsersList] = useState([]);
    //Fetch all users
    useEffect(() => {
        setIsLoading(true)

        async function fetchAllUsers() {
            const data = await getAllUsers();
            if (data === 'Error') {
                setIsLoading(false)
                console.log('Failed to fetch users list')
            } else {
                console.log('Users list:', data)
                setIsLoading(false);
                setUsersList(data);
            }
        }

        fetchAllUsers();
    }, []);
    return (
        <div>
            <AdminOptions/>
            <button>Add User</button>
            {isLoading ?
                <div>Loading...</div> :
                (<div>
                    {usersList.map(user => {
                        return (
                            <div key={user._id}>
                                <p>username: {user.username}</p>
                                <p>email: {user.email}</p>
                                <button>update</button>
                                <button>delete</button>
                                <hr/>
                            </div>
                        )
                    })}
                </div>)
            }
        </div>
    );
};

export default AdminUsers;