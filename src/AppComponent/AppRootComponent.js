import React from 'react'
import CalculadoraJurosCompostos from './CalculadoraJurosComponent';
import {montante} from '../Libs/JurosCompostos'
import ResultadoJurosComponent from './ResultadoJurosComponent'
import HistoricoComponent from './HistoricoComponent'
import TabelaComponent from './TabelaComponent'
// import Footer from '../NavComponent/Footer'


class AppRootComponent extends React.Component{
  constructor( props){ 
    super(props)

    this.state = { 
        historico:[],/* é a lista de historico que mostra todos os calculos já realizados */
        IndiceAtual:0 ,/* é a posição que representa o historico atual */
        Total:0,
        IDqtd : 0,
        MontanteAtualFragmentado:null,
        AtualMostrarSuperChat:0/** id do item que vai mostrar no super chat */
     }
  }
  adicionarNoHistorico(resultado,valores){
   
    let cloneHistorico = this.state.historico

   /**DEPOIS DE CALCULAR O JUROS ADICIONAR NO HISTÓRICO */  
   cloneHistorico.push(
    { 
      resultado:resultado,
      montanteInicial:valores.montanteInicial,
      juros:valores.juros,
      tempo:valores.tempo ,
      Id: this.state.IDqtd

    }
  )

  /** Insere o historico define a quantidade e o resultado que sera mosrtado no component montante */
    this.setState({historico:cloneHistorico})
    this.setState({IDqtd:this.state.IDqtd+1})
    this.setState( {Total: resultado })


    this.setState({AtualMostrarSuperChat:this.state.historico.length -1})
  }
  /** calcula o juros para depois esses valores serem mostrados no component de historico de resultados */
  calcularJuros(valores)
  {

    let resultado = montante(valores.montanteInicial,valores.juros,valores.tempo,valores.aporte);
    this.adicionarNoHistorico(resultado,valores)
    // this.calcularMontanteFragmentado()
  }
  /** remove do histórico pelo id um item que está sendo mostrado no historico de resultados */
  removerDoHistorico(Id){

    // retorne todos que não  tiverem esse id
    let cloneHistorico = this.state.historico.filter((v,i)=> v.Id !== Id)
    
    let conter = 0;
    cloneHistorico.forEach((v,i)=>{ i = conter; conter++;})


    /** insere a lista filtrada sem o elemento indesejado */
    this.setState({historico:cloneHistorico})
    this.setState({Idqtd: this.state.Idqtd -1 })
    
    
    this.setState({AtualMostrarSuperChat:this.state.historico.length -2})

    console.log( "Valor"+this.state.historico.length  )

    /** recalcular o indice */

  }
  mudarAtual(Id){
    
      this.setState({AtualMostrarSuperChat:Id})
    
  }
  render(){
    return(
      <div className="container-fluid bg-secondary">
        <div className="row">
          <div className="col-12 col-sm-7 col-lg-6">
            <CalculadoraJurosCompostos calcular={ (valores) => this.calcularJuros(valores)}/>
          </div>
          <div className="col-12  col-sm-5 col-lg-6">
          
                <ResultadoJurosComponent resultado={parseInt(this.state.Total)}/>
                <HistoricoComponent mudar={(Id)=>this.mudarAtual(Id)} deletar={(Id)=>this.removerDoHistorico(Id)} historico={this.state.historico} />
              
          </div>
        </div>
        <div className="row">
           {/* A tabela component comtem o super chart e dela é repassado o historico
          que será lido { 'quebrado' em um array, no qual cada
          elemento desse array possuirá um [tempo,montante] } */}
            <TabelaComponent montante={this.state.historico} escolhido={this.state.AtualMostrarSuperChat}/>
          
           
        </div>
      </div>)
  }
}

export default AppRootComponent;