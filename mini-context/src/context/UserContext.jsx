import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const UseUser = () => {
    return useContext(UserContext)
}

export const UserContextProvder = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext