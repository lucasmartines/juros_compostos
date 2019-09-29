import React from 'react'

export function InputSimpleComponent(props)
{
  return(                    
    <div className="form-group"> 
        <h3><label htmlFor={props.nome}> {props.nome}</label></h3>
        <input type="number" className="form-control" step={props.step || 1} value={props.value} id={props.nome} onChange={props.onChange} onClick={props.onClick}/>                        
    </div>)
}
export function InputChackBoxComponent(props)
{
  return(
    <div className="form-group">
        <h3> <label>Mes ou Ano?</label></h3>
        <div className="form-check">
            <input name="selectTempo" className="form-check-input" type="radio" value="mes" 
               />
            <label className="form-check-label"> Mes </label>
        </div>
        <div className="form-check">
            <input name="selectTempo" className="form-check-input" type="radio" value="ano"/>
            <label className="form-check-label" > Ano </label>
        </div>
    </div>
  )
}

export function Click(props)
{
  return <div className="d-block">
      <button className="btn btn-primary d-block px-5 py-3 w-100" onClick={props.onClick}>
          {props.nome||"Calcular"}
      </button>
  </div>
}