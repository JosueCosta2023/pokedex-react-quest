import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Button = (props) => {
    const theme = useContext(ThemeContext)

    const BUTTON_STYLE = {
        color: theme.theme.headerButtonFontColor,
        backgroundColor: theme.theme.headerButtomBackgroundColor,
        padding:"5px 20px",
        fontSize:"20px",
        borderRadius:"5px"
        
    }
    return(
        <button {...props} style={ BUTTON_STYLE} />
    )
}