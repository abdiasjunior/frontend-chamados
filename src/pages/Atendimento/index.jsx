import { Link, useParams } from "react-router-dom"
import { useRef, useState } from "react"
import Header from "../../components/Header"

function Atendimento(){
    const {id} = useParams()
    
    const [chamado, setChamado] = useState({
        assunto: "",
        categoria: "",
        descricao: "",
        devolutiva: "",
        status: ""
    })

    const assuntoRef = useRef()
    const categoriaRef = useRef()
    const descricaoRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        alert('teste')
    }

    return (
        <div className="flex flex-col items-center">
            <Header/>
            <div className="w-8/12 max-md:w-10/12 mx-auto bg-white p-8 border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Novo chamado</h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="flex gap-3 max-md:flex-col">
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Assunto" type="text" ref={assuntoRef}/>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" ref={categoriaRef}>
                            <option selected disabled>Selecione uma categoria</option>
                            <option value="Solicitação">Solicitação</option>
                            <option value="Dúvida">Dúvida</option>
                            <option value="Reclamação">Reclamação</option>
                            <option value="Informação">Informação</option>
                            <option value="Sugestão">Sugestão</option>
                        </select>
                    </div>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Descrição" ref={descricaoRef}/>

                    <p>Atendimento</p>
                    <select className="w-1/2 max-md:w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" ref={categoriaRef}>
                        <option selected disabled>Selecione um status</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluído">Concluído</option>
                    </select>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Devolutiva" ref={descricaoRef}/>


                    <div className="flex gap-3">
                        <Link className=" w-1/3 text-black text-center bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded-md" to="/chamados">Cancelar</Link>
                        <button className=" w-2/3 bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md">Enviar chamado</button>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default Atendimento