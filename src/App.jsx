import { Outlet } from 'react-router-dom'
import EstilosGlobais from './EstilosGlobais/EstilosGlobais'
import BarraNavegacao from './componentes/BarraNavegacao/BarraNavegacao'
import Rodape from './componentes/Rodape/Rodape'

function App() {

  return (
    <>
      <EstilosGlobais />
      <BarraNavegacao />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App
