import {createUserUri, getAllUsersUri, loginUserUri} from "./ConstantsList";

//Create user
export const createUser = async (newUser) => {
    const response = await fetch(createUserUri, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    return response;
}

//Login User
export const loginUser = async (userToLogin) => {
    // console.log('login user')
    try {
        const response = await fetch(loginUserUri, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userToLogin)
        })
        if (response.ok && response.status === 201) {
            const data = await response.json();
            return data;
        } else {
            throw Error('Login failed')
        }
    } catch (error) {
        return error.message
    }
}


//Read, get all users
export const getAllUsers = async () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    }
    try {
        const response = await fetch(getAllUsersUri, body)
        if (response.ok && response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            return 'Error'
        }
    } catch (error) {
        return 'Error'
    }
}