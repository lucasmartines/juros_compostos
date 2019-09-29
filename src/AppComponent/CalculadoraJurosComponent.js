import React from 'react'
import {InputSimpleComponent,Click} from './InputSimpleComponent'



class CalculadoraJurosCompostos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          
            juros:1,
            montanteInicial:1,
            aporte:0,
            tempo:1,
            isMes:false
          
        }
    }
    setJuros(juros){
      this.setState({juros:parseInt(juros,10)})
    }
    setMontante(montante){
      this.setState({montanteInicial:parseInt(montante,10)})
    }
    setTempo(t){
      this.setState({tempo:parseInt(t,10)})
    }
    setAporte(a = 1 ){
      a = (a == 0)? 1: a;
      this.setState({aporte:a})
    }
    calcularJuros=()=>
    {
      
      this.props.calcular(this.state)
    }
    render(){
        return(
            <div className="mx-2 my-5 p-5 border  bg-white rounded-sm">
                <div>
                    <InputSimpleComponent  nome="Taxa de Juros" 
                        onChange={ (e)=> this.setJuros( e.target.value || 1 ) }
                        
                       />
                    <InputSimpleComponent step={100} nome="Montante Inicial"
                       onChange={ (e)=> this.setMontante( e.target.value || 1 ) }
                       />
                    <InputSimpleComponent nome="Quantidade de Tempo"
                       onChange={ (e)=>this.setTempo( e.target.value || 1 )  }
                       />
{/*                        
                     <InputSimpleComponent nome="Aporte Mensal/Anual"
                       onChange={ (e)=>this.setAporte( e.target.value || 1 )  }
                       step = {100}
                       /> */}
                    <Click onClick={this.calcularJuros}/>
{/* 
                    <InputChackBoxComponent
                      Change={ (e)=> this.setState({ isMes: e.isMes })} 
                      value={this.state.isMes}/> */}
                </div>
            </div>
        )
    }
}
export default CalculadoraJurosCompostos;