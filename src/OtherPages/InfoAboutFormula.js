import React from 'react'
import NavComponent from '../NavComponent/NavComponent'
import imgFormula from '../Img/juros-composto.gif'



export default function InfoAboutFormula()
{
    return(
    <div className="min-size container p-4"> 
     <div className="col-12 col-md-8 col-xl-8 mx-auto like-blog" >
      <h2> Juros </h2>
      <hr/>
      <p>
        Juro é a remuneração cobrada pelo empréstimo de dinheiro (ou outro item). É expresso como um percentual sobre o valor emprestado (taxa de juro) e pode ser calculado de duas formas: juros simples ou juros compostos.
      </p>
      <p>
        O juro pode ser compreendido como uma espécie de "aluguel" de dinheiro. A taxa é uma compensação paga pelo tomador do empréstimo para ter o direito de usar o dinheiro até o dia do pagamento. O credor, por outro lado, recebe uma compensação por não poder usar esse dinheiro até o dia do pagamento e por correr o risco de não receber o dinheiro de volta (risco de inadimplência).
      </p>
      <p className="text-center pt-2">
         <img src={imgFormula}alt="img formula" style={{width:"100%"}}/>
      </p>
     </div>
    </div>)
}