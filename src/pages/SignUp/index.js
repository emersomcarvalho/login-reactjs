import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import {FiArrowDownLeft } from 'react-icons/fi'


import api from "../../services/api";

class SignUp extends Component {
  
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };
  

   handleSubmit = async e => {
    e.preventDefault()
   const { username, email, password } = this.state;
   if (!username || !email || !password) {
   this.setState({ error: "Preencha todos os dados para se cadastrar. :p" });
   } else {
      try {
       await api.post('auth/register', {username, email, password});
      
        alert('Tudo certo!');
     this.props.history.push("/login");
     } catch (err) {
       console.log(err);
       this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
   }
 render(){
return (
      <>
     
      <p>
        <strong> Projeto de base treinamentos </strong> 
        </p>

      <form  onSubmit={this.handleSubmit}>
      {this.state.error && <p>{this.state.error}</p>}

      <input 
       type="text"
       placeholder="Nome de usuário*"
       onChange={e => this.setState({ username: e.target.value })}
         />

        <input
      id="email"
      type="email"
      placeholder="Seu E-mail*"
      onChange={e => this.setState({ email: e.target.value })}
      />
        
       <input
      id="senha"
      type="password"
      placeholder="Digite sua senha*"
      onChange={e => this.setState({ password: e.target.value })}
      />

      <button className="btn" type="submit">Cadastre-se</button>

      <Link className="link" to="/login">
                        <FiArrowDownLeft size={18} color="#551A8B"/>
                    Voltar para login
            </Link>
      
      </form>
     
      </>
     );
   }
  }

export default SignUp;