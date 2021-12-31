const host = 'http://localhost:3000';


//USERS

//User create
export const createUserUri = `${host}/users`

//User login
export const loginUserUri = `${host}/login`;


//GENRE

//Genre create
export const createGenreUri = `${host}/genres/admin`;

//Get all genres
export const getAllGenresUri = `${host}/genres/admin`;

//BAND
//Create band
export const createBandUri = `${host}/bands/admin`;
//Get all bands
export const getAllBandsUri = `${host}/bands/admin`;


//EVENT
//Create event
export const createEventUri = `${host}/events`;