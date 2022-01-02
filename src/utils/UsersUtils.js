import {
    createUserUri,
    deleteOneUserUri,
    getAllUsersUri,
    getOneUserUri,
    loginUserUri,
    updateOneUserUri
} from "./ConstantsList";

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

//Read find one user
export const findOneUser = async (userId) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    };
    try {
        const response = await fetch(`${getOneUserUri}/${userId}`, body);
        if (response.ok && response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            return 'Error';
        }
    } catch (error) {
        return 'Error';
    }
}

//Update one user - update username,email,roles
export const updateOneUser = async (userToUpdateId, payload) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify(payload)
    };
    try {
        const response = await fetch(`${updateOneUserUri}/${userToUpdateId}`, body);
        if (response.ok && response.status === 200) {
            const data = await response.json();
            console.log('User updated with success', data);
        } else {
            return 'Error';
        }
    } catch (error) {
        return 'Error';
    }
}


//Update one user - event booking
export const UserbooksEvent = async (eventId) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify({
            username: currentUser.username,
            email: currentUser.email,
            favBands: currentUser.favBands,
            bookedEvents: [...currentUser.user.bookedEvents, eventId],
        })
    };
    try {
        // console.log('current User', currentUser.user._id);
        const response = await fetch(`${updateOneUserUri}/${currentUser.user._id}`, body);
        if (response.ok && response.status === 200) {
            const data = await response.json();
            console.log('User updated with success', data);
        } else {
            return 'Error';
        }
    } catch (error) {
        return 'Error';
    }
}

//Update one user - add a band to my favBand
export const addToFavBand = async (bandId) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify({
            username: currentUser.username,
            email: currentUser.email,
            favBands: [...currentUser.user.favBands, bandId],
            bookedEvents: currentUser.user.bookedEvents,
        })
    };
    try {
        const response = await fetch(`${updateOneUserUri}/${currentUser.user._id}`, body);
        if (response.ok && response.status === 200) {
            const data = await response.json();
            console.log('User updated with success', data);
        } else {
            return 'Error';
        }
    } catch (error) {
        return 'Error';
    }
}


//Delete one user
export const deleteOneUser = async (id) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    }
    try {
        const response = await fetch(`${deleteOneUserUri}/${id}`, body);
        // console.log('deleting one user response...', response);
        if (response.ok && response.status === 200) {
            return 'Deletion Ok';
        } else {
            return 'Error'
        }
    } catch (error) {
        return 'Error'
    }
}