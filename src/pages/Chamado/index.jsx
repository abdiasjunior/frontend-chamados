import { Link, useNavigate, useParams } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import Header from "../../components/Header"
import api from "../../services/api"

function Chamado() {
    const [chamado, setChamado] = useState(
        {
            "id": null,
            "dataHoraAbertura": null,
            "assunto": null,
            "descricao": null,
            "tipo": null,
            "dataHoraAtendimento": null,
            "dataHoraFechamento": null,
            "status": null,
            "devolutiva": null,
            "usuario": {"nome": null},
            "atendente": null
        }
    )
    const statusRef = useRef()
    const devolutivaRef = useRef()
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        buscarChamado(id)
    }, [])
    
    async function buscarChamado(id) {
        const { data } = await api.get(`/chamados/${id}`)
        setChamado(data)
    }

    function dataAtualFormatada(){
        var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    }

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-6/12 max-md:w-10/12 mx-auto bg-white p-8 border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Chamado ID {id} - {dataAtualFormatada(chamado.dataHoraAbertura)}</h2>
                <form className="flex flex-col gap-3">
                    <p className="font-bold max-md:text-center">Abertura</p>
                    <div className="flex gap-3 max-md:flex-col">
                        <label className="w-full">Usuário
                            <input disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Assunto" type="text" value={chamado.usuario.nome}/>
                        </label>
                        <label className="w-full">Categoria
                            <input disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" value={chamado.tipo} />
                        </label>
                    </div>
                    <div className="flex gap-3 max-md:flex-col">
                        <label className="w-full">Assunto
                            <input disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Assunto" type="text" value={chamado.assunto}/>
                        </label>
                        <label className="w-full">Status
                        <input disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" value={chamado.status} />
                        </label>
                    </div>
                        <label className="w-full">Descrição
                            <textarea disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Descrição" value={chamado.descricao} />
                        </label>
                    <hr />
                    <p className="font-bold max-md:text-center">Atendimento</p>


                    <div className="flex gap-3 max-md:flex-col">
                        <label className="w-full">Atendente
                            <input disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" value={chamado.atendente}/>
                        </label>
                        <label className="w-full">Data fechamento
                        <input disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" value={chamado.dataHoraFechamento} />
                        </label>
                    </div>
                    <label className="w-full">Devolutiva
                        <textarea disabled className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" value={chamado.devolutiva}/>
                    </label>

                    <div className="flex gap-3 justify-end">
                        <Link className="w-1/4 text-black text-center bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded-md" to="/chamados">Voltar</Link>
                        <Link className="w-1/4 text-center bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md" to={`/atendimento/${chamado.id}`}>Atender</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chamado