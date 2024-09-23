import { Link } from "react-router-dom"
import { useRef } from "react"
import api from "../../services/api"

function Cadastro(){
    const nomeRef = useRef()
    const emailRef = useRef()
    const senhaRef = useRef()
    const setorRef = useRef()
    const matriculaRef = useRef()

    async function handleSubmit(e){
        e.preventDefault()
        
        try {
            await api.post('/nomerota', {
                nome: nomeRef.current.value,
                email: emailRef.current.value,
                senha: senhaRef.current.value,
                setor: setorRef.current.value,
                matricula: matriculaRef.current.value
            })
            alert('usuário cadastrado')
        } catch(error) {
            alert('erro ao cadastrar usuário')
        }
        
    }

    return (
        <div className="max-w-md mt-10 mx-auto bg-white p-8 border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Nome" type="text" ref={nomeRef}/>

                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="E-mail" type="email" ref={emailRef}/>

                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Matrícula" type="text" ref={matriculaRef}/>

                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Setor" type="text" ref={setorRef}/>

                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Senha" type="password" ref={senhaRef}/>

                <button className="w-full bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md">Cadastrar</button>
            </form>
            <Link className="text-gray-800 hover:underline mt-4 block text-center" to="/">Fazer login</Link>
        </div>
    )
}

export default Cadastro