import styled from "styled-components"
import TituloSecao from "../TituloSecao/TituloSecao"

const ContainerClientes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 40px 0;
`

const Depoimento = styled.div`
    max-width: 515px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
`

const DepoimentoTexto = styled.div`
    color: #233723;
    font-family: GothamLight;
    font-size: 35px;
    font-style: italic;
    font-weight: 300;
    line-height: 137%;
    margin-bottom: 40px;
`

const DepoimentoLegenda = styled.div`
    color: #233723;
    font-family: GothamBlack;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 155%; /* 27.9px */

`

const Clientes = () => {
    return (<section>
        <TituloSecao titulo="Clientes satisfeitos" legenda="Avaliações" />
        <ContainerClientes>
            <Depoimento>
                <DepoimentoTexto>
                    “Ficamos nesta acomodação encantadora por uma noite e foi muito bom estar no meio da natureza.”
                </DepoimentoTexto>
                <DepoimentoLegenda>
                    Esther Hogward
                </DepoimentoLegenda>
                <DepoimentoLegenda>
                    Abril de 2023
                </DepoimentoLegenda>
            </Depoimento>
            <div>
                <img src="/clientes-satisfeitos.png" alt="" />
            </div>
        </ContainerClientes>
    </section>)
}

export default Clientes