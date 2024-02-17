import Card from "../card/card"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

const Cards = () => {
    const theme = useContext(ThemeContext)
    
    const SECTION_STYLED = {
        width: "100%",
        height:"100vh",
        paddingTop:"40px",
        backgroundColor:theme.theme.bodyContainerBackgroundColor
    }


    return (
        <>
            <section style={SECTION_STYLED}>
                <Card />
            </section>
        </>
    )
}


export default Cards