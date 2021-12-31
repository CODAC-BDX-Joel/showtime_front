import {createEventUri, deleteOneEventUri, getAllEventsUri} from "./ConstantsList";


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
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
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

//Delete one event
export const deleteOneEvent = (id) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    };
}