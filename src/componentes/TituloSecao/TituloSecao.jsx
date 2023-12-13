import styled from "styled-components";

const SecaoEstilizada = styled.section`
    text-align: center;
    margin-top: 56px;
`

const TituloEstilizado = styled.h3`
    color: #233723;
    font-family: GothamBlack;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    margin: 0;
`

const LegendaEstilizada = styled.small`
    color: #333;
    font-family: GothamThin;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
`

const TituloSecao = ({ titulo, legenda }) => {
    return (<SecaoEstilizada>
        {legenda?.length > 0 && <LegendaEstilizada>{legenda}</LegendaEstilizada>}
        <TituloEstilizado>
            {titulo}
        </TituloEstilizado>
    </SecaoEstilizada>)
}

export default TituloSecao