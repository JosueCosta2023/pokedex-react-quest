import { useContext } from "react"
import  {ThemeContext}  from "../../contexts/theme-context"
import styled from "styled-components"

export const CardDetails = () => {

    const theme = useContext(ThemeContext)

    const CONSTAINER_SECTION = {
        backgroundColor:theme.theme.bodyContainerBackgroundColor,
        width: "100%",
        padding:'0',
        maxWidth: "100%",
        height:"100vh",
        display:'flex',
        justifyContent:'center',
    }

    const SECTION_CARD_DETAIL = {
        width:'650px',
        maxWidth:'100%',
        height:'400px',
        backgroundColor:'#f0f0f0',
        borderRadius:'10px',
        padding:'20px',
        marginTop:'50px',
        display:'flex', 
        justifyContent:'space-between',
        flexWrap:'wrap'
    }

    const DIV = {
        width:'47%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
    }

    const IMAGE = {
        width:'40%',
        transform:'rotateY(180deg)'
    }
    const TEXTO_MOVIMENTO = {
        width:'100%',
        display:'flex', 
        backgroundColor:'red',
        gap:'20px'      
    }
    const TEXTO = {
        width:'100%',

    }

    return (
       <section style={CONSTAINER_SECTION}>
            <div style={SECTION_CARD_DETAIL}>
                <div style={DIV}>
                    <img src="/public/images/char.png" alt="" style={IMAGE} />
                    <h2>Jacare</h2>
                    <h3>Movimentos</h3>
                    <ul style={TEXTO_MOVIMENTO}>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                    </ul>
                </div>
                <div style={DIV}>
                    

                    <ul style={TEXTO}>
                        <h3>Habilidades</h3>
                        <li>
                            <h4>Habilidade 1</h4>
                            <p>texto descritivo da haibilidade</p>
                        </li>
                        <li>
                            <h4>Habilidade 2</h4>
                            <p>texto descritivo da haibilidade</p>
                        </li>
                        <li>
                            <h4>Habilidade 3</h4>
                            <p>texto descritivo da haibilidade</p>
                        </li>
                        <li>
                            <h4>Habilidade 4</h4>
                            <p>texto descritivo da haibilidade</p>
                        </li>
                        <li>
                            <h4>Habilidade 1</h4>
                            <p>texto descritivo da haibilidade</p>
                        </li>
                    </ul>
                </div>
            </div>
       </section>
    )
}

const DivSection = styled.div`
   
`