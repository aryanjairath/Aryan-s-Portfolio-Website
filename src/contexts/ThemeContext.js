import React, {useState} from "react";
import { createContext } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider = ( {children} ) => {
    const[isLight, setLight] = useState(true);
    const LightMode = {
        text: 'white',
        source: ''
    }
    const toggleMode = () => {
        setLight((prev) => !prev)
    }
    const DarkMode = {
        text: 'black',
        source: ''
    }
    return (
        <ThemeContext.Provider value = {{isLight, LightMode, DarkMode, toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;