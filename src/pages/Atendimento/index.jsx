import { Link, useNavigate, useParams } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import Header from "../../components/Header"
import api from "../../services/api"
import { toast } from "react-toastify"

function Atendimento() {
    const [chamado, setChamado] = useState(
        {
            "id": "",
            "dataHoraAbertura": "",
            "assunto": "",
            "descricao": "",
            "tipo": "",
            "dataHoraAtendimento": "",
            "dataHoraFechamento": "",
            "status": "",
            "devolutiva": "",
            "usuario": {
              "id": "",
              "nome": "",
              "email": "",
              "senha": "",
              "matricula": "",
              "perfil": "",
              "setor": "",
              "status": "",
              "dataCadastro": "",
              "atendentes": [
                ""
              ],
              "chamados": [
                ""
              ]
            },
            "atendente": {
              "id": "",
              "dataFuncao": "",
              "status": "",
              "usuario": {
                "id": "",
                "nome": "",
                "email": "",
                "senha": "",
                "matricula": "",
                "perfil": "",
                "setor": "",
                "status": "",
                "dataCadastro": "",
                "atendentes": [
                  ""
                ],
                "chamados": [
                  ""
                ]
              },
              "chamados": [
                ""
              ]
            }
          }
    )
    const statusRef = useRef()
    const devolutivaRef = useRef()
    const idUsuario = localStorage.getItem('id')
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        buscarChamado(id)
    }, [])
    
    async function buscarChamado(id) {
        const { data } = await api.get(`/chamados/${id}`)
        setChamado(data)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await api.put(`/chamados/${id}`, {
                "status": statusRef.current.value,
                "devolutiva": devolutivaRef.current.value,
                "usuarioId": idUsuario
                }
            )
            navigate(`/chamado/${id}`)
            toast.success('Atendimento registrado')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    function dataAtualFormatada() {
        var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth() + 1).toString(), // +1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear(),
            hora = data.getHours().toString(),
            horaF = (hora.length == 1) ? '0' + hora : hora,
            min  = data.getMinutes().toString(),
            minF = (min.length == 1) ? '0' + min : min,
            seg  = data.getSeconds().toString(),
            segF = (seg.length == 1) ? '0' + seg : seg;
    
        return diaF + "/" + mesF + "/" + anoF + " " + horaF + ":" + minF + ":" + segF;
    }

    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-6/12 mt-20 max-md:mt-28 max-md:w-10/12 mx-auto bg-white p-8 border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Atendimento ao Chamado ID {id} - {dataAtualFormatada(chamado.dataHoraAbertura)}</h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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

                    <select className="w-1/2 max-md:w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" type="text" ref={statusRef} required>
                        <option selected value="EM ANDAMENTO">EM ANDAMENTO</option>
                        <option value="CONCLUIDO">CONCLUÍDO</option>
                    </select>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Devolutiva" ref={devolutivaRef} required/>

                    <div className="flex gap-3 justify-end">
                        <Link className="w-1/4 text-black text-center bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded-md" to="/chamados">Cancelar</Link>
                        <Link to={`/chamado/${chamado.id}`} className="w-1/4 text-center bg-green-600 hover:bg-green-800 rounded-md px-4 font-semibold py-2 text-white">Ver</Link>
                        <button className="w-1/4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Atendimento