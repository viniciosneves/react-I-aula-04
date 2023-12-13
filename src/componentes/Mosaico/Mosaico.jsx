import styled from "styled-components"
import TituloSecao from "../TituloSecao/TituloSecao"

const ContainerMosaico = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

const MosaicoDuplo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
`

const Mosaico = () => {
    return (<section>
        <TituloSecao titulo="Mosaico" legenda="Explorando as atrações da terra" />
        <ContainerMosaico>
            <div>
                <img src="/home/mosaico-1.png" alt="" />
            </div>
            <MosaicoDuplo>
                <img src="/home/mosaico-2.png" alt="" />
                <img src="/home/mosaico-3.png" alt="" />
            </MosaicoDuplo>
            <div>
                <img src="/home/mosaico-4.png" alt="" />
            </div>
            <MosaicoDuplo>
                <img src="/home/mosaico-5.png" alt="" />
                <img src="/home/mosaico-6.png" alt="" />
            </MosaicoDuplo>
            <div>
                <img src="/home/mosaico-7.png" alt="" />
            </div>
        </ContainerMosaico>
    </section>)
}

export default Mosaico