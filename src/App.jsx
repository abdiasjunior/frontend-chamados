import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import NovoChamado from "./pages/NovoChamado"
import Chamados from "./pages/Chamados"
import Atendimento from "./pages/Atendimento"
import Chamado from "./pages/Chamado"

function App() {
  return (
    //navegação
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/novochamado" element={<NovoChamado/>}/>
        <Route path="/chamados" element={<Chamados/>}/>
        <Route path="/atendimento/:id" element={<Atendimento/>}/>
        <Route path="/chamado/:id" element={<Chamado/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App