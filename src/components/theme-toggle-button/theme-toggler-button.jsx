import React, { useContext } from "react"
import {ThemeContext , themes}  from "../../contexts/theme-context"
import  Button  from "../button/button"

const ThemeToggleButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <>
            <Button onClick={() => setTheme(
                theme === themes.dark ? themes.light : themes.dark
            )}>Alternar Thema</Button>
        </>
    )
}

export default ThemeToggleButton