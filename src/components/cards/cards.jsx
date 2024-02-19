import Card from "../card/card"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { ButtomCharge } from "../button/buttonCharge"

const Cards = () => {
    const theme = useContext(ThemeContext)
    
    const SECTION_STYLED = {
        width: "100%",
        padding:"50px 0px",
        display:"flex",
        justifyContent:"center",
        alignItms:"center",
        flexDirection:"column",
        gap:"40px",

        backgroundColor:theme.theme.bodyContainerBackgroundColor
    }

    return (
        <>
            <section style={SECTION_STYLED}>
                <Card />
                <ButtomCharge/>
            </section>
        </>
    )
}


export default Cards