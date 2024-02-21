import { useContext } from "react"
import  {ThemeContext}  from "../../contexts/theme-context"
import styled from "styled-components"

const Button = (props) => {
    const theme = useContext(ThemeContext)

    return(
        <ButtomStyled {...props} theme={theme.theme} />
    )
}


const ButtomStyled = styled.button`
    color: ${(theme) => theme.theme.headerButtonFontColor};
    background-color: ${(theme) => theme.theme.headerButtomBackgroundColor};
    padding:5px 20px;
    font-size:20px;
    border-radius:5px;
`

export default Button