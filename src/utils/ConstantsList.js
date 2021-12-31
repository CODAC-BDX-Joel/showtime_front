const host = 'http://localhost:3000';


//USERS

//User create
export const createUserUri = `${host}/users`;

//User login
export const loginUserUri = `${host}/login`;

//User -> get all users
export const getAllUsersUri = `${host}/users`

//GENRE

//Genre create
export const createGenreUri = `${host}/genres/admin`;

//Genre read,Get all genres
export const getAllGenresUri = `${host}/genres/admin`;

//Genre delete one genre
export const deleteOneGenreUri =`${host}/genres/admin`;


//BAND
//Create band
export const createBandUri = `${host}/bands/admin`;
//Get all bands
export const getAllBandsUri = `${host}/bands/admin`;


//Delete one band
export const deleteOneBandUri = `${host}/bands/admin`;


//EVENT
//Create event
export const createEventUri = `${host}/events`;

//Get all events
export const getAllEventsUri = `${host}/events`;

//Delete one event
export const deleteOneEventUri =  `${host}/events/admin`;