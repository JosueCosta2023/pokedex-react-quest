import { createContext, useState } from "react";
import './variables.css'

export const themes = {
    light:{
        headerBackgroundColor:'var(--primary-light-color)',
        headerButtonFontColor:'var(--primary-light-color)',
        headerButtomBackgroundColor:'var(--primary-dark-color)',

        bodyContainerBackgroundColor:'var(--primary-dark-color)',
        bodyCardButtomBackgroundColor:'var(--primary-dark-color)',
        bodyCardBackgroundColor:'var(--primary-light-color)',
        bodyCardButtonFontcolor:'var(--primary-light-color)'	
    },
    dark:{
        headerBackgroundColor:'var(--primary-dark-color)',
        headerButtonFontColor:'var(--primary-dark-color)',
        headerButtomBackgroundColor:'var(--primary-light-color)',

        bodyContainerBackgroundColor:'var(--primary-light-color)',
        bodyCardButtomBackgroundColor:'var(--primary-light-color)',
        bodyCardBackgroundColor:'var(--primary-dark-color)',
        bodyCardButtonFontcolor:'var(--primary-dark-color)'	
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)


    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}