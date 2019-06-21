import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

// importar bootrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//Componentes:

//NavBar
import NavBar from './components/NavBar'
//Home
import Home from './components/Home'
//Registrar
import LogIn from './components/LogIn'

function App() {
  return (
    
    <Router>
      <NavBar />
      <div>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={LogIn} />
      </div>
    </Router>
    
  );
}

export default App;
