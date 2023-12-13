import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    background: #436143;
    padding: 48px;
`

const ListaLinks = styled.ul`
    padding: 0;
    list-style: none;
    color: #FEFEFE;
    font-family: GothamBlack;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 155%; /* 21.7px */
    li {
        margin-bottom: 16px;
    }
    li:last-child {
        margin-bottom: 0;
    }
`
const LinkRodape = styled.a`
    text-decoration: none;
    &:visited {
        color: #FEFEFE;
    }
`

const ListaSocial = styled.ul`
    display: flex;
    padding: 0;
    list-style: none;
    justify-content: end;
    gap: 8px;
`

const Agradecimento = styled.p`
    color: #FEFEFE;
    text-align: right;
    font-family: GothamBlack;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 155%; /* 31px */
    margin-bottom: 0;
    max-width: 270px;
`

const Copy = styled.small`
    background: #436143;
    padding: 16px 56px;
    display: flex;
    justify-content: space-between;
`

const TextoCopy = styled.small`
    color: #FFF;
    font-family: GothamBlack;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 155%; 
`
const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-between;
`
const ContainerFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
`

const links = [
    {
        descricao: 'Home',
        href: '#'
    },
    {
        descricao: 'Fotografia',
        href: '#'
    },
    {
        descricao: 'Sobre',
        href: '#'
    },
    {
        descricao: 'Blog',
        href: '#'
    },
    {
        descricao: 'Contato',
        href: '#'
    },
    {
        descricao: 'Política de Privacidade',
        href: '#'
    },
]

const Rodape = () => {

    return (
        <>
            <RodapeEstilizado>
                <ContainerFlex>
                    <ListaLinks>
                        {links.map((link, indice) => (<li key={indice}>
                            <LinkRodape href={link.href}>
                                {link.descricao}
                            </LinkRodape>
                        </li>))}
                    </ListaLinks>
                    <ContainerFlexColumn>
                        <Agradecimento>
                            Agradecemos a sua visita, Vejo você em breve :)
                        </Agradecimento>
                        <ListaSocial>
                            <li>
                                <a href="">
                                    <img src="/icones/ig.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/icones/fb.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/icones/yt.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/icones/tw.png" alt="" />
                                </a>
                            </li>
                        </ListaSocial>
                    </ContainerFlexColumn>
                </ContainerFlex>
            </RodapeEstilizado>
            <Copy>
                <TextoCopy>
                    © 2022 Travigo. Todos os direitos reservados.
                </TextoCopy>
                <TextoCopy>
                    Adapatdo de TedUI. Powered by Webflow.
                </TextoCopy>
            </Copy>
        </>
    )
}

export default Rodape