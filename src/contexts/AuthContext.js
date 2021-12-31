import {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const currenUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const [userConnected, setUserConnected] = useState(currenUser);

    return (
        <AuthContext.Provider value={{userConnected,setUserConnected}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;