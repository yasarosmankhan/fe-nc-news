import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState([])

    return (
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    )
}