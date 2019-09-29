import React from 'react'
import {montante}from '../Libs/JurosCompostos'
import SuperChart from '../ChartComponent/SuperChart'


export default class TabelaComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = { dadosJuros :[]}
    }

    calcularFinal(Escolhido = 0){

        /** pega o ultimo item escolhido e verifica se ele é valido se sim escolhe ele */
        console.log( this.props.montante[Escolhido] )
        if(this.props.montante[Escolhido] !== undefined )
        {
            
            /**pega item escolhido
             */
            // let UltimoItemHistorico = this.props.montante[this.props.montante.length-1]
            let UltimoItemHistorico =  this.props.montante[Escolhido] 
            
            /** representa a lista de montantes, tá mas o que quer dizer?
             * o que vai nele representa dois valores: 
             * 1 o tempo e 2 o montante
             * exemplo
             * t   $m
             * 1 - $1100
             * 2 - $1105
             * 3 - $1108
             */
            let listaMontantes = [];

            for( let juroId = 0; juroId <= UltimoItemHistorico.tempo ; juroId++)
            {
                /** o calculo de montante realiza o calculo de juros compostos so que passo a passo
                 * ou seja ele adiciona na lista o tempo que representa o juroId junto do
                 * montante calculado 
                 * e isso vai ocorrer para cada quantidade de t que o usuario inseriu na aplicação!
                 */
                let montanteAtual = montante( UltimoItemHistorico.montanteInicial ,UltimoItemHistorico.juros, juroId , UltimoItemHistorico.aporte)
              
                listaMontantes.push([ juroId + 1, montanteAtual ])
                
            }
            /** No final retorne a lista de montantes que s
             * será usada no super chart do google
             */
            return listaMontantes;
                    
        }
        else{
            return 0;
        }
    }
    returnSuperChatOrFailMsg(){
        if(this.calcularFinal(this.props.escolhido) == 0){
            return<div> <h5> Não foi selecionado nenhuma tabela! </h5></div>
        }
        else{
            return <SuperChart entrada={this.calcularFinal(this.props.escolhido) || []}/>
        }
    }
    
    render(){
        return(<div className="mx-5 my-5 p-5 border  bg-white rounded-sm w-100">
            <h2>Tabela de Juros Compostos</h2>
            {this.returnSuperChatOrFailMsg()}
           
        </div>)
    }
}