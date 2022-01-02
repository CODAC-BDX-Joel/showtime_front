const host = 'http://localhost:3000';


//USERS

//User create (POST)
export const createUserUri = `${host}/users`;

//User login
export const loginUserUri = `${host}/login`;

//User read, get all users
export const getAllUsersUri = `${host}/users`;

//User read, get one User
export const getOneUserUri = `${host}/users`;

//User update (PATCH)
export const updateOneUserUri = `${host}/users`

//User delete one user
export const deleteOneUserUri = `${host}/users`;


//GENRE

//Genre create
export const createGenreUri = `${host}/genres/admin`;

//Genre read,Get all genres
export const getAllGenresUri = `${host}/genres/admin`;

//Genre delete one genre
export const deleteOneGenreUri = `${host}/genres/admin`;


//BAND
//Create band
export const createBandUri = `${host}/bands/admin`;
//Get all bands
export const getAllBandsUri = `${host}/bands/admin`;

//Get on band
export const getOneBandUri = `${host}/bands/admin`;

//Delete one band
export const deleteOneBandUri = `${host}/bands/admin`;


//EVENT
//Create event
export const createEventUri = `${host}/events`;

//Get all events
export const getAllEventsUri = `${host}/events`;

//Get one event
export const getOneEventUri = `${host}/events`;

//Delete one event
export const deleteOneEventUri = `${host}/events/admin`;