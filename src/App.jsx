import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import NovoChamado from "./pages/NovoChamado"
import Chamados from "./pages/Chamados"
import Atendimento from "./pages/Atendimento"

function App() {
  return (
    //navegação
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/novochamado" element={<NovoChamado/>}/>
        <Route path="/chamados" element={<Chamados/>}/>
        <Route path="/chamado/:id" element={<Atendimento/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App