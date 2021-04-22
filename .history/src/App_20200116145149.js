import React from 'react';
import {Link} from 'react-router-dom'
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
      <form>
        <label htmlFor="email*">E-mail*</label>
      <input
      id="email"
      type="email"
      placeholder="Seu E-mail"
      />
 <button className="btn" onclick="window.location.href = 'http://pt.stackoverflow.com'" type="submit">Entrar</button>
      </form>
    </div>
    </div>
  );
}

export default App;
   