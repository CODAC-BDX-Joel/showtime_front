import {createBandUri, deleteOneBandUri, getAllBandsUri, getOneBandUri} from "./ConstantsList";

// Create band

export const createBand = async (newBand) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify(newBand)
    }
    try {
        const response = await fetch(createBandUri, body)
        if (response.ok && response.status === 201) {
            const data = await response.json();
            return data;
        } else {
            return 'Error';
        }
    } catch (error) {
        return 'Error';
    }
}

//Read, get all bands
export const getAllBands = async () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    }
    try {
        const response = await fetch(getAllBandsUri, body)
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

//Read get one band
export const getOneBand = async (id) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    }
    try {
        const response = await fetch(`${getOneBandUri}/${id}`, body)
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

//Delete one band
export const deleteOneBand = async (id) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    };
    try {
        const response = await fetch(`${deleteOneBandUri}/${id}`, body)
        if (response.ok && response.status === 200) {
            return 'Deletion Ok';
        } else {
            return 'Error'
        }
    } catch (error) {
        return 'Error'
    }
}