import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import Header from "../../components/Header"
import api from "../../services/api"
import { toast } from "react-toastify"

function NovoChamado(){
    const assuntoRef = useRef()
    const categoriaRef = useRef()
    const descricaoRef = useRef()
    const idUsuario = localStorage.getItem('id')
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            await api.post('/chamados',{
                "assunto": assuntoRef.current.value,
                "tipo": categoriaRef.current.value,
                "descricao": descricaoRef.current.value,
                "usuarioId": idUsuario
            })
            navigate('/chamados')
            toast.success('Chamado registrado')
        } catch (error){
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Header/>
            <div className="w-6/12 mt-20 max-md:mt-28 max-md:w-10/12 mx-auto bg-white p-8 border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Novo chamado</h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex gap-3 max-md:flex-col">
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Assunto" type="text" ref={assuntoRef} required/>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" ref={categoriaRef} required>
                            <option disabled selected>Selecione uma categoria</option>
                            <option value="SOLICITAÇÃO">SOLICITAÇÃO</option>
                            <option value="DÚVIDA">DÚVIDA</option>
                            <option value="RECLAMAÇÃO">RECLAMAÇÃO</option>
                            <option value="INFORMAÇÃO">INFORMAÇÃO</option>
                            <option value="SUGESTÃO">SUGESTÃO</option>
                        </select>
                    </div>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Descrição" required ref={descricaoRef}/>
                    <div className="flex gap-3 justify-end">
                        <Link className=" w-1/4 text-black text-center bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded-md" to="/chamados">Cancelar</Link>
                        <button className=" w-1/4 bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md">Enviar</button>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default NovoChamado