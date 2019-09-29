import React from 'react'

export default function ResultadoJurosComponent(props){
    return(<div>
        <div className="mx-2 my-5 p-5 border  bg-white rounded-sm">
            <h2> Montante: $<strong> {props.resultado.toFixed(2)} </strong></h2>
        </div>
    </div>)
}