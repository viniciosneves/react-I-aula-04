import EstilosGlobais from './EstilosGlobais/EstilosGlobais'
import BarraNavegacao from './componentes/BarraNavegacao/BarraNavegacao'
import CabecalhoHome from './componentes/CabecalhoHome/CabecalhoHome'
import Clientes from './componentes/Clientes/Clientes'
import Container from './componentes/Container/Container'
import Mosaico from './componentes/Mosaico/Mosaico'
import Noticias from './componentes/Noticias/Noticias'
import Paisagens from './componentes/Paisagens/Paisagens'
import Rodape from './componentes/Rodape/Rodape'
import Tags from './componentes/Tags/Tags'


function App() {

  return (
    <>
      <EstilosGlobais />
      <BarraNavegacao />
      <Container>
        <CabecalhoHome />
        <Paisagens />
      </Container>
      <Mosaico />
      <Tags />
      <Noticias />
      <Clientes />
      <Rodape />
    </>
  )
}

export default App
