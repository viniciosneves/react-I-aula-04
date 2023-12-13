import styled from "styled-components"
import TituloSecao from "../TituloSecao/TituloSecao"
import IconeSeta from "../IconeSeta/IconeSeta"
import BtnLink from "../BtnLink/BtnLink"

const UlEstilizado = styled.ul`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    justify-content: center;
    margin: 40px 0;
`

const LegendaEstilizada = styled.small`
    margin-top: 16px;
    color: #233723;
    font-family: GothamBlack;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 155%; 
    display: block;
`

const Paisagens = () => {
    return (<section>
        <TituloSecao titulo="Explorar paisagens" legenda="A vida é pra viver" />
        <UlEstilizado>
            <li>
                <img src="/public/home/nova-zelandia.png" alt="" />
                <LegendaEstilizada>
                    Paisagens incríveis na Nova Zelândia
                </LegendaEstilizada>
            </li>
            <li>
                <img src="/public/home/malta.png" alt="" />
                <LegendaEstilizada>
                    Paisagens Incríveis em Malta
                </LegendaEstilizada>
            </li>
            <li>
                <img src="/public/home/leao.png" alt="" />
                <LegendaEstilizada>
                    O Leão na África do Sul
                </LegendaEstilizada>
            </li>
            <li>
                <img src="/public/home/novos-amigos.png" alt="" />
                <LegendaEstilizada>
                    Meus novos amigos :)
                </LegendaEstilizada>
            </li>
        </UlEstilizado>
        <div>
            <BtnLink>
                Ver todas as Paisagens <IconeSeta />
            </BtnLink>
        </div>
    </section>)
}

export default Paisagens