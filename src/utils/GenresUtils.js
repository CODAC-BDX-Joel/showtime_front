import {createGenreUri, getAllGenresUri, deleteOneGenreUri} from "./ConstantsList";


//Create genre
export const createGenre = async (newGenre) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify(newGenre)
    }
    try {
        const response = await fetch(createGenreUri, body)
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

//Read or get all genres
export const getAllGenres = async () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    }
    const response = await fetch(getAllGenresUri, body);
    if (response.ok && response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        return 'Error'
    }
}

//Delete one genre
export const deleteOneGenre = async (id) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const token = currentUser ? currentUser.access_token : null;
    const body = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    }
    try {
        const response = await fetch(`${deleteOneGenreUri}/${id}`, body);
        if (response.ok && response.status === 200) {
           return 'Deletion Ok';
        } else {
            return 'Error'
        }
    } catch (error) {
        return 'Error'
    }
}