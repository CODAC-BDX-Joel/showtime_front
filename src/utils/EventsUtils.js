import {createEventUri, deleteOneEventUri, getAllEventsUri, getOneEventUri} from "./ConstantsList";


//Create event
export const createEvent = async (newEvent) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify(newEvent)
    }

    try {
        const response = await fetch(createEventUri, body)
        if (response.ok && response.status === 201) {
            const data = await response.json();
            return data;
        } else {
            return 'Error'
        }
    } catch (error) {
        return 'Error'
    }
}

//Read, get all events

export const getAllEvents = async () => {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    // const token = currentUser ? currentUser.access_token : null;
    const body = {
        // headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        headers: {'Content-Type': 'application/json'},
    };
    try {
        const response = await fetch(getAllEventsUri, body)
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

//Read, get one event
export const getOneEvent = async (id) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    };
    try {
        const response = await fetch(`${getOneEventUri}/${id}`, body)
        if (response.ok && response.status === 200) {
            // console.log(response);
            const data = await response.json();
            return data;
        } else {
            return 'Error'
        }
    } catch (error) {
        return 'Error'
    }

}

//Delete one event
export const deleteOneEvent = async (id) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    };
    try {
        const response = await fetch(`${deleteOneEventUri}/${id}`, body);
        console.log('delete event response', response);
        if (response.ok && response.status === 200) {
            return 'Deletion Ok';
        } else {
            return 'Error'
        }
    } catch (error) {
        return 'Error'
    }
}