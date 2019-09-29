import React from'react'

export default function Footer(props){
    return(<div className="bg-dark d-block w-100" style={{marginTop:-15}} >
        <div className="container p-3 mt-2 ">
            <h3 className="text-white"> Construido por {props.criador || "Lucas Martines"}</h3>
            <hr/>
            <p className="text-white"> Todos os Direitos Reservados {new Date().getFullYear()}</p>
        </div>
    </div>)
}