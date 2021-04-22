import React ,{useState} from 'react';

import api from '../../services/api';

import '../../App.css';


export default function Login ({history}) {
const [email, setEmail] = useState('');


    async function handleSubmit (event){
      event.preventDefault()
    
      const response = await api.post('./sessions', { email })
      //console.log(response);
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);
      history.push('/new');
    }
    return (

          
    <>
      <p>
        Entre no <strong> mundo gamer</strong> do <strong>Sheik Dev</strong>. *Projeto de teste*        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email*">E-mail*</label>
        <input
        id="email"
        type="email"
        placeholder="Seu E-mail"
        value={email}
        onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
        </form>
    </>
  );
}

