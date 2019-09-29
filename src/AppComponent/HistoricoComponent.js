import React from 'react'

class HistoricoComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {}
    }
    showProps (){
        
        return this.props.historico.map((i,k)=>{
            return <li key={i.Id}> 
                <button onClick={()=>this.props.mudar(i.Id)} className="btn w-100 text-left p-1 mb-1" style={{border:"1px solid #777"}}>
                    <h2> Resultado: ${i.resultado }</h2>
                
                    <span>Montante Inicial: ${i.montanteInicial}  </span>
                    <span> Juros: {i.juros}%</span>
                    <span>Tempo: {i.tempo} </span>
                    <br/>
                    {/**informa qual deletar para o componente acima */}
                   
                </button>
                <button onClick={()=>this.props.deletar(i.Id)} className="btn btn-danger"> Deletar </button>
            </li>
        })
    }
    HistoricoVasioMsg(){
        return <p>Não Existe nenhum Elemento Ainda</p>
    }
    render(){
        return(
            <div className="mx-2 my-5 p-5 border  bg-white rounded-sm">
                <h2> Histórico</h2>
                <div style={{maxHeight:400,overflow:"scroll"}}>
                    <ul>
                        {this.showProps() || this.HistoricoVasioMsg() }
                    </ul>
                </div>
            </div>
        )
    }
}

export default HistoricoComponent