import {createContext, useContext, useState} from 'react'

const ThemeContext = createContext()

export const UseTheme = ()=>{
    return useContext(ThemeContext)
}

export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState("light")

    return(
        <ThemeContext.Provider value={{theme, setTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext