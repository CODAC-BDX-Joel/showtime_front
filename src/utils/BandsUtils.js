import {createBandUri, getAllBandsUri} from "./ConstantsList";

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
    const response = await fetch(getAllBandsUri, body)
    if(response.ok && response.status === 200){
        const data = await response.json();
        return data;
    }else{
        return 'Error'
    }
}