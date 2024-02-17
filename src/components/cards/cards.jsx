import styled from "styled-components"
import Card from "../card/card"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

const Cards = () => {

    const theme = useContext(ThemeContext)

    return(
        <>
            <section style={{
                 width:"1400px",
                 maxWidth:"100%",
                 margin:"0 auto",
                 display:"flex",
                 alignItems:"center",
                 justifyContent:"center",
                 flexWrap:"wrap",
                 gap:"10px",
                 paddingTop:"10px",
                backgroundColor: theme.theme.backgroundCard
            }}>
                <Card/>
            </section>
        </>
    )
}


export default Cards