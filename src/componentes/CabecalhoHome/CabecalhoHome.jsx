import styled from "styled-components"
import IconeSeta from "../IconeSeta/IconeSeta"

const HeaderEstilizado = styled.header`
    background-image: url('/home/banner-home.png');
    width: 100%;
    min-height: 954px;
`
const TextoDestaque = styled.span`
    color: #3D683C;
    font-family: GothamBlack;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: block;
`

const TituloEstilizado = styled.h1`
    display: flex;
    align-items: flex-end;
    gap: 20px;
    padding: 300px 120px;
    margin: 0;
`

const SubTitulo = styled.h2`
    color: #3D683C;
    font-family: GothamBlack;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 109.878%;
    max-width: 330px;
    margin: 0;
`

const Tipografia = styled.p`
    max-width: 280px;
    color: #333;
    font-family: GothamBlack;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
`

const Navegacao = styled.a`
    display: flex;
    align-items: center;
    color: #333;
    text-transform: uppercase;
    font-family: GothamBlack;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

const Rodape = styled.section`
    display: flex;
    align-items: center;
    gap: 80px;
    justify-content: center;
    margin-bottom: 60px;
`

const CabecalhoHome = () => {

    return (<HeaderEstilizado>
        <TituloEstilizado>
            <div>
                <TextoDestaque>
                    Encontre sua
                </TextoDestaque>
                <TextoDestaque style={{ paddingLeft: 90 }}>
                    Hospedagem 
                </TextoDestaque>
            </div>
            <TextoDestaque>
                <img src="/home/globo.png" alt="" /> Ideal
            </TextoDestaque>
        </TituloEstilizado>
        <Rodape>
            <div>
                <TextoDestaque>
                    11k+
                </TextoDestaque>
                <Tipografia>
                    Vila e quartos listados
                </Tipografia>
            </div>
            <div>
                <TextoDestaque>
                    47+
                </TextoDestaque>
                <Tipografia>
                    Países visitados
                </Tipografia>
            </div>
            <div>
                <Tipografia>
                    Mais de 2500 fotos tiradas nas minhas diferentes viagens, boa viagem :)
                </Tipografia>
                <Navegacao>
                    Explorar fotos <IconeSeta />
                </Navegacao>
            </div>
            <div>
                <SubTitulo>
                Explorar todos as lindas paisagens
                </SubTitulo>
                <Tipografia>
                    Fique onde quiser, quando quiser, com baixo custo.
                </Tipografia>
            </div>
        </Rodape>
    </HeaderEstilizado>)
}

export default CabecalhoHome