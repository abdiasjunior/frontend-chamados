import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../../components/Header"
import api from "../../services/api"

function Chamados(){
    const [chamados, setChamados] = useState()
    const perfil = localStorage.getItem('perfil')

    useEffect(() => {
        buscarChamados()
    }, [])

    async function buscarChamados(){
        const {data} = await api.get('/chamados')
        setChamados(data)
    }

    async function excluirChamado(id){
        try {
            await api.delete(`/chamados/${id}`)
            buscarChamados()
        } catch(error){
            alert("erro ao excluir o chamado")
        }
    }

    function dataAtualFormatada(d) {
        var data = new Date(d),
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
            <Header/>
            <div className="w-6/12 max-md:w-10/12 py-5 px-8 rounded-lg bg-gray-800 flex items-center flex-col gap-3">
                <h1 className="font-bold  text-white text-xl">Chamados realizados</h1>
                
                {
                    chamados && chamados.length > 0 && chamados.map( chamado => (
                        <div className="w-full bg-white p-2 px-4 hover:scale-105 transition-all border-gray-300 rounded-lg shadow-lg flex justify-between items-center gap-2" key={chamado.id}>
                            <div className="flex flex-col">
                                <p className="">
                                    <strong>ID: </strong>{chamado.id}
                                </p> 
                                <p><strong>Abertura: </strong>{dataAtualFormatada(chamado.dataHoraAbertura)}</p>
                                <p><strong>Categoria: </strong>{chamado.tipo}</p>
                                <p><strong>Assunto: </strong>{chamado.assunto}</p>
                            </div>
                            <div className="w-1/6 max-md:w-1/4 flex flex-col gap-1 text-center">
                                <Link to={`/chamado/${chamado.id}`} className="w-full bg-green-600 hover:bg-green-800 rounded-md px-4 text-md text-white">Ver</Link>
                                {
                                    chamado.status == "CONCLUIDO" || perfil == "CLIENTE"? (
                                        ""
                                    ) : ( 
                                        <Link to={`/atendimento/${chamado.id}`}  className="w-full bg-blue-600 hover:bg-blue-800 rounded-md px-4 text-md text-white">Atender</Link>
                                    )
                                }
                                {
                                    perfil == "CLIENTE"? (
                                        ""
                                    ) : ( 
                                        <button onClick={() => excluirChamado(chamado.id)} className="w-full bg-red-600 hover:bg-red-800 rounded-md px-4 text-md text-white">Excluir</button>
                                    )
                                }             
                            </div>
                        </div>
                    ))   
                }
            </div>
        </div>
    )
}

export default Chamados