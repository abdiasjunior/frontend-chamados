import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import NovoChamado from "./pages/NovoChamado"
import Chamados from "./pages/Chamados"
import Atendimento from "./pages/Atendimento"
import Chamado from "./pages/Chamado"
import Private from "./Private"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/novochamado" element={<Private><NovoChamado/></Private>}/>
        <Route path="/chamados" element={<Private><Chamados/></Private>}/>
        <Route path="/atendimento/:id" element={<Private><Atendimento/></Private>}/>
        <Route path="/chamado/:id" element={<Private><Chamado/></Private>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App