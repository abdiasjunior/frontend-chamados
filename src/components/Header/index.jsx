import { Link, useNavigate } from "react-router-dom"
import { SiHelpscout } from "react-icons/si";

function Header(){
    const navigate = useNavigate()

    function sair(){
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <header className="bg-white w-full flex max-md:flex-col max-md:items-center p-3 mb-5 gap-2 justify-between items-center">
            <h1 className="font-bold flex gap-1 justify-center items-center text-2xl max-md:text-3xl">
                <SiHelpscout className="text-red-600"/>
                Sistema de chamados
            </h1>
            <div className="flex gap-2 items-center">
                <Link to="/chamados" className="bg-gray-200 hover:bg-gray-300 rounded-md px-4 text-md text-black">Chamados</Link>
                <Link to="/novoChamado" className="bg-gray-200 hover:bg-gray-300 rounded-md px-4 text-md text-black">Novo chamado</Link>
                <button className="bg-red-600 hover:bg-red-800 rounded-md px-4 text-md text-white" onClick={sair}>Sair</button>
            </div>
        </header>
    )
}

export default Header