import React from 'react';
import ReactDOM from 'react-dom';

import { Route,  Switch, Link, BrowserRouter as Router } from 'react-router-dom'

import css from './main.css'

import InfoAboutFormula from './OtherPages/InfoAboutFormula'
import NavComponent from './NavComponent/NavComponent'
import App from './App';
import Footer from './NavComponent/Footer'
import NotFound from './OtherPages/NotFound'
import InformacoesAdicionais from './OtherPages/InformacoesAdicionais'

import * as serviceWorker from './serviceWorker'



const Routing = ()=> (
  <Router >
    {/* basename="/" */}
    <NavComponent />
    <Switch >
      <Route path="/"  exact component={App} />
      <Route path="/formula_about" component={InfoAboutFormula} />
      <Route path="/about" component={InformacoesAdicionais} />
      <Route component={NotFound}/>
    </Switch>
    <Footer criador="Lucas Martines"/>

  </Router>
  )

ReactDOM.render( <Routing/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
