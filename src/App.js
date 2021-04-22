import React from 'react';

import logo from './assets/22.png';

import Routes from '../src/routes';

function App() {

  return (
    <div className="container">
    <img className="lg" src={logo} alt="teste" />
    <div className="content">
      <Routes />
     
    </div>
    </div>
  );
}

export default App;

