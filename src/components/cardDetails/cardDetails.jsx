import { useContext } from "react"
import  {ThemeContext}  from "../../contexts/theme-context"
import styled from "styled-components"

export const CardDetails = () => {

    const SECTION_DETAILS = {
        width:'100%',
        height:'100vh',
        backgroundColor:'red',
        display:'flex',
        justifyContent:'center',
        alingItems:'center'
    }
    const CONTENT_DETAILS = {
        width:'80%',
        height:'80%',
        backgroundColor: 'white',
        marginTop:'40px'
    }
    const PRINCIPAL_DETAILS = {}
    const INFO_DETAILS = {}
    return (
        <section style={SECTION_DETAILS}>
            <div style={CONTENT_DETAILS}>
                <div style={PRINCIPAL_DETAILS}>
                    <div>
                        <img src="#" alt="" />
                        <div>
                            <img src="#" alt="" />
                            <img src="#" alt="" />
                            <img src="#" alt="" />
                        </div>
                    </div>
                    <div>
                        <h1>nome do pokemon</h1>
                        <h3>Tipo do pokemon</h3>
                    </div>
                </div>

                <div style={INFO_DETAILS}>
                    <div>
                        <h2>Habilidades</h2>
                        <ul>
                            <li>
                                <p>Hibilidade 1</p>
                                <span>Descrição</span>
                            </li>

                            <li>
                                <p>Hibilidade 2</p>
                                <span>Descrição</span>
                            </li>

                            <li>
                                <p>Hibilidade 3</p>
                                <span>Descrição</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Movimentos</h2>
                        <ul>
                             <li>
                                <p>Movimento 1</p>
                                <span>Descrição</span>
                            </li>

                            <li>
                                <p>Movimento 2</p>
                                <span>Descrição</span>
                            </li>

                            <li>
                                <p>Movimento 3</p>
                                <span>Descrição</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const DivSection = styled.div`
   
`