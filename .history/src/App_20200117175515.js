import React from 'react';
import {Router} from 'react-router-dom';
import './App.css';
import logo from './assets/ps.png';



function App() {

    
  return (
    <div className="container">
      <img className="lg" src={logo} alt="teste" />
    <div className="content">
      <p>
        Entre no <strong>melhor mundo gamer</strong> do <strong>Sheik Dev</strong>. Página teste de login
      </p>
      <form >
        <label htmlFor="email*">E-mail*</label>
      <input
      id="email"
      type="email"
      placeholder="Seu E-mail"
      />
       <button className="btn" type="submit">Entrar</button>

      </form>
    </div>
    </div>
  );
}

export default App;

//<button className="btn" type="submit" href='https://pt.stackoverflow.com'>Entrar</button>