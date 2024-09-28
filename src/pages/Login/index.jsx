import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import api from "../../services/api"
import { SiHelpscout } from "react-icons/si";
import { toast } from "react-toastify";

function Login(){
    const emailRef = useRef()
    const senhaRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const {data} = await api.post('/auth/login',{
                "email": emailRef.current.value,
                "password": senhaRef.current.value
            })
            localStorage.setItem('token', data.access_token)
            localStorage.setItem('id', data.id)
            localStorage.setItem('perfil', data.perfil)
            navigate('/chamados')
            toast.success('Bem-vindo(a) ao sistema')
        } catch (error){
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className="max-w-md mt-10 mx-auto bg-white p-8 border-gray-300 rounded-lg shadow-lg">
            <h1 className="font-bold mb-6 flex gap-1 justify-center items-center text-3xl">
                <SiHelpscout className="text-red-600"/>
                Sistema de chamados
            </h1>
            <h2 className="text-xl font-bold mb-6 text-center text-gray-800">Login</h2>
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