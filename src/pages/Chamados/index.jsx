import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../../components/Header"


function Chamados(){
    //const [chamados, setChamados] = useState()

    /*useEffect(() => {
        async function buscarChamados(){
            const token = localStorage.getItem('token')
            const { data } = await api.get('/nomedarota', {
                headers: {Autorization: `Bearer ${token}`}
            })
            setChamados(data.chamados)
        }
        buscarChamados()
    }, [])*/

    return (
        <div className="flex flex-col items-center">
            <Header/>
            <div className="w-6/12 max-md:w-10/12 p-5 rounded-lg bg-gray-800 flex items-center flex-col gap-5">
                <h1 className="font-bold  text-white text-xl">Chamados realizados</h1>
                
                {/*{chamados && chamados.length > 0 && chamados.map( chamado => ())}
                    usar a key
                    */}
                <div className="w-full bg-white p-2 px-4 border-gray-300 rounded-lg shadow-lg flex justify-between items-center gap-2">
                    <div className="flex flex-col">
                        <p><strong>ID: </strong>1</p>
                        <p><strong>Categoria: </strong> Solicitação</p>
                        <p><strong>Assunto: </strong> Teste do teste do teste do teste</p>
                    </div>
                    <div className="flex flex-col gap-1 text-center">
                        <Link className="w-full bg-blue-600 hover:bg-blue-800 rounded-md px-4 text-md text-white">Atender</Link>
                        <button className="w-full bg-red-600 hover:bg-red-800 rounded-md px-4 text-md text-white">Excluir</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chamados