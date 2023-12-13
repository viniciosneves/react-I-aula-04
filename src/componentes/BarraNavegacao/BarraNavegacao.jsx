import styled from "styled-components";
import LinkEstilizado from "../Link/Link";
import Container from "../Container/Container";

const UlEstilizada = styled.ul`
    padding: 12px 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 40px;
    margin: 0;
`

const Divisor = styled.li`
    flex-grow: 1;
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
]

const BarraNavegacao = () => {


    return (
        <nav>
            <Container>
                <UlEstilizada>
                    <li>
                        <img src="/logo.png" alt="" />
                    </li>
                    <Divisor />
                    {links.map((link, indice) => <li key={indice}>
                        <LinkEstilizado href={link.href}>
                            {link.descricao}
                        </LinkEstilizado>
                    </li>)}
                </UlEstilizada>
            </Container>
        </nav>
    )
}

export default BarraNavegacao