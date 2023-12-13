import styled from "styled-components"
import TituloSecao from "../TituloSecao/TituloSecao"
import BtnLink from "../BtnLink/BtnLink"
import IconeSeta from "../IconeSeta/IconeSeta"

const ContainerNoticias = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 60px;
`

const DataPostagem = styled.small`
    color: #000;
    font-family: GothamThin;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 155%; /* 21.7px */
`

const TituloPost = styled.h4`
    color: #000;
    font-family: GothamBlack;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 155%; 
    margin: 0;
    max-width: 405px;
`

const BlogThumbnail = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
`

const Noticias = () => {
    return (<section>
        <TituloSecao titulo="Nosso Blog" legenda="Notícias" />
        <ContainerNoticias>
            <BlogThumbnail>
                <img src="/blog/blog-thumbs-1.png" alt="" />
                <DataPostagem>
                    28 de novembro de 2023
                </DataPostagem>
                <TituloPost>
                    Fairmont Mayakoba inaugura novo Beach Club, Maykana
                </TituloPost>
            </BlogThumbnail>
            <BlogThumbnail>
                <img src="/blog/blog-thumbs-2.png" alt="" />
                <DataPostagem>
                    28 de novembro de 2023
                </DataPostagem>
                <TituloPost>
                    Fairmont Mayakoba inaugura novo Beach Club, Maykana
                </TituloPost>
            </BlogThumbnail>
            <BlogThumbnail>
                <img src="/blog/blog-thumbs-3.png" alt="" />
                <DataPostagem>
                    28 de novembro de 2023
                </DataPostagem>
                <TituloPost>
                    Fairmont Mayakoba inaugura novo Beach Club, Maykana
                </TituloPost>
            </BlogThumbnail>
        </ContainerNoticias>
        <div>
            <BtnLink>
                Ver todas as notícias <IconeSeta />
            </BtnLink>
        </div>
    </section>)
}

export default Noticias