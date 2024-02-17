import { createContext, useState } from "react";

export const themes = {
    light:{
        colorFont: "#000",
        background: "#fff",
        backgroundCard: "gray"
    },
    dark:{
        colorFont: "#fff",
        background: "#000",
        backgroundCard: "red"
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)


    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}