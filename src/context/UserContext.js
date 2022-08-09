import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = () => {
        //logica de login 
    }

    const logout = () => {
        //logica logout
    }

    const signup = () => {
        //logica de registracion
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup }}> 
            {children}
        </UserContext.Provider>
    )
}