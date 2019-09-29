import React from 'react'
import {Link} from 'react-router-dom'

const Jumbotron = (
    <div className="jumbotron mb-0">
        <div className="container">
            <h1 className="display-3">Calculadora de Juros Compostos!</h1>
            <p className="lead">É uma aplicação de juros compostos, criada utilizando o react e bootstrap</p>
            <hr/>
        </div>
    </div>
)

class NavComponent extends React.Component{
  render(){
    return( 
    <div>
      {Jumbotron}
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div className="container">
          <ul className="navbar-nav ">
            <li className="nav-item"> 
                <Link className="nav-link" to="/">Juros Simples</Link>
            </li>
            <li className="nav-item"> 
                <Link className="nav-link" to="/formula_about">Conheça a Formula</Link>
            </li>       
            <li className="nav-item"> 
                <Link className="nav-link" to="/about">Conheça o projeto!</Link>
            </li>               
          </ul>
        </div>
      </nav>
    </div>)
  }
}
export default NavComponent;