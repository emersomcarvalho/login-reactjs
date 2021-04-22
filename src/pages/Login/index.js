import React, {Component} from 'react';

import {FiLogIn} from 'react-icons/fi'

import {Link} from 'react-router-dom';

import '../../App.css';

import './style.css';


import api from '../../services/api';


 class Login extends Component {
     
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
      const {  email, password } = this.state;
  if (!email || !password) {
    
    this.setState({ error: "Preencha todos os dados corretos ou se cadastre. :p" });
  } else {

    try {
      await api.post("auth/authenticate", {email, password});

      this.props.history.push("/gallery");

    } catch (err) {

      console.log(err);
      this.setState({ error: "Ocorreu um erro ao registrar sua conta. :(" });
     }
  }
      
}
  render(){
    return (
   <>
      <p>
        Entre no <strong> portfólio teste</strong> do <strong>  Emersom</strong>. *Projeto de autenticação com jwt *        
        </p>

        <form onSubmit={this.handleSubmit}>
        {this.state.error && <p>{this.state.error}</p>}

        <input 
        id="email"
        type="email"
        placeholder="Seu E-mail*"
        onChange={e => this.setState({email: e.target.value})}
        />
         <input
        id="senha"
        type="password"
        placeholder="Digite sua senha*"
        
        onChange={e => this.setState({password: e.target.value})}
        />
        <button className="btn" type="submit">Entrar</button>
        

        <Link className="link" to="/signup">
                        <FiLogIn size={18} color="#341783"/>
                    Não tenho cadastro
                    </Link>

        </form>
       </>
       );
     }
  }

export default Login;