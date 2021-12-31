import {createGenreUri, getAllGenresUri} from "./ConstantsList";


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
    const response = await fetch(getAllGenresUri, body)
    if(response.ok && response.status === 200){
        const data = await response.json();
        return data;
    }else{
        return 'Error'
    }
}