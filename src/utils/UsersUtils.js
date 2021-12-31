import {createUserUri, loginUserUri} from "./ConstantsList";


export const createUser = async (newUser) => {
    const response = await fetch(createUserUri, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    return response;
}


export const loginUser = async (userToLogin) => {
    // console.log('login user')
    try {
        const response = await fetch(loginUserUri, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userToLogin)
        })
        if (response.ok && response.status === 201) {
            const data = await response.json();
            return data;
        } else {
            throw Error('Login failed')
        }
    } catch (error) {
        return error.message
    }

}