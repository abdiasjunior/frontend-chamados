import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import api from "../../services/api"

function Login(){
    const emailRef = useRef()
    const senhaRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const {data} = await api.post('/nomedarota',{
                email: emailRef.current.value,
                senha: senhaRef.current.value
            })
            const token = data
            localStorage.setItem('token', token)
            //const atendente = data.atendente
            //localStorage.setItem('atendente', atendente)
            navigate('/chamados')
        } catch (error){
            alert('erro ao fazer o login')
        }
    }

    return (
            <div className="max-w-md mt-10 mx-auto bg-white p-8 border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="E-mail" type="email" ref={emailRef}/>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Senha" type="password" ref={senhaRef}/>
                <button className="w-full bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md">Login</button>
            </form>
            <Link className="text-gray-800 hover:underline mt-4 block text-center" to="/cadastro">Criar conta</Link>
        </div>
    )
}

export default Login