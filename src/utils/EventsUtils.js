import {createEventUri} from "./ConstantsList";


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