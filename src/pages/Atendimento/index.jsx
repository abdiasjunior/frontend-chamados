import { Link, useNavigate, useParams } from "react-router-dom"
import { useRef, useState } from "react"
import Header from "../../components/Header"

function Atendimento(){
    const {id} = useParams()
    const navigate = useNavigate()
    
    /*useEffect(() => {
        async function buscarChamado(id){
            const token = localStorage.getItem('token')
            const chamado = await api.get(`/nomedarota/${id}`, {
                headers: {Autorization: `Bearer ${token}`}
            })
            setChamado(chamado)
        }
        buscarChamado(id)
    }, [])*/

    const [chamado, setChamado] = useState({
        assunto: "",
        categoria: "",
        descricao: "",
        devolutiva: "",
        status: ""
    })

    const statusRef = useRef()
    const devolutivaRef = useRef()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            await api.put(`/nomedarota/${id}`, chamado)
            alert('chamado atualizado')
            navigate("/chamados")
        } catch(error) {
            alert('erro ao atualizar o cadastro')
        }
        
    }

    return (
        <div className="flex flex-col items-center">
            <Header/>
            <div className="w-6/12 max-md:w-10/12 mx-auto bg-white p-8 border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Chamado ID {id}</h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex gap-3 max-md:flex-col">
                        <input disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Assunto" type="text" value={chamado.assunto}/>
                        <input disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" value="Dúvida"/>
                    </div>
                    <textarea disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Descrição" value={chamado.descricao}/>

                    <hr />
                    <p className="font-bold max-md:text-center">Atendimento</p>
                    
                    <select className="w-1/2 max-md:w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" ref={statusRef}>
                        <option selected disabled>Selecione um status</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluído">Concluído</option>
                    </select>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Devolutiva" ref={devolutivaRef}/>


                    <div className="flex gap-3 justify-end">
                        <Link className="w-1/4 text-black text-center bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded-md" to="/chamados">Cancelar</Link>
                        <button className="w-1/4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md">Atender</button>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default Atendimento