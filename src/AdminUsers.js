import React, {useEffect, useState} from 'react';
import AdminOptions from "./components/AdminOptions";
import {getAllUsers, deleteOneUser} from "./utils/UsersUtils";
import {useHistory} from "react-router-dom";

const AdminUsers = () => {
    const history = useHistory();
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

    const handleDeleteUser = async (id) => {
        setIsLoading(true)
        const response = await deleteOneUser(id);
        if (response === 'Error') {
            setIsLoading(false);
            alert('User deletion failed');
        } else {
            setIsLoading(false);
            alert('User removed with success');
            const newUsersList = usersList.filter(user => {
                return user._id !== id;
            });
            setUsersList(newUsersList);
        }
    }

    const handleDetails = (id) => {
        history.push(`/userDetails/${id}`)
    }
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
                                <button onClick={() => handleDetails(user._id)}>details</button>
                                <button onClick={() => handleDeleteUser(user._id)}>delete</button>
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