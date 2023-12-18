import CabecalhoHome from "../../componentes/CabecalhoHome/CabecalhoHome"
import Clientes from "../../componentes/Clientes/Clientes"
import Container from "../../componentes/Container/Container"
import Mosaico from "../../componentes/Mosaico/Mosaico"
import Noticias from "../../componentes/Noticias/Noticias"
import Paisagens from "../../componentes/Paisagens/Paisagens"
import Tags from "../../componentes/Tags/Tags"

const Home = () => {
    return (<>
        <Container>
            <CabecalhoHome />
            <Paisagens />
        </Container>
        <Mosaico />
        <Tags />
        <Noticias />
        <Clientes />
    </>)
}

export default Home