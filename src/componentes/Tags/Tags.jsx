import styled from "styled-components"
import TituloSecao from "../TituloSecao/TituloSecao"

const SecaoEstilizada = styled.section`
    margin-top: 55px;
    background: #F0FBEF;
    padding: 40px;
`
const TagContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
`
const Tag = styled.li`
    background: #FFF;
    padding: 8px 14px;
    text-align: center;
    font-family: GothamBlack;
`

const hashtags = [
    "Amantes da Fotografia",
    "Construção de Portfólio",
    "Capturar o Momento",
    "Apaixonados por Câmeras",
    "Arte Fotográfica",
    "Amor pelas Lentes",
    "Narrativa Visual",
    "Foto Perfeita",
    "Cliques Criativos",
    "Fotografia Profissional",
    "Enquadramento",
    "Viciados em Fotografia",
    "Foco nos Detalhes",
    "Habilidades Fotográficas",
    "Fotografia Artística",
    "Através da Lente"
];

const Tags = () => {
    return (<SecaoEstilizada>
        <TituloSecao titulo="Jornada, Exploração e Aventura" legenda="Veja o mundo com seus próprios olhos"/>
        <TagContainer>
            {hashtags.map((tag, indice) => (<Tag key={indice}>
                {tag}
            </Tag>))}
        </TagContainer>
    </SecaoEstilizada>)
}

export default Tags