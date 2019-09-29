import React from 'react'
import {Link} from 'react-router-dom'


export default function NotFound() {
    return (
    <div class="min-size container py-3"> 
      <h1> Erro 404 </h1> 
      <p>Arquivo/Pagina não encontrado!</p>
      <Link to="/">Pagina Inicial</Link>
    </div>)
}