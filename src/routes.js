/* eslint-disable import/first */
import React from 'react';

import { BrowserRouter, Switch, Redirect, Route} from "react-router-dom";

import { isAuthenticated } from "./pages/Token/auth";


// Rotas
import Login from './pages/Login';
import New from './pages/New';
import Signup from './pages/SignUp';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/signup", state: { from: props.location } }} />
        )
      }
    />
  );

 const Routes = () =>{
    return (

<BrowserRouter>
<Switch>

<PrivateRoute path='/' exact component={Login} />
<Route path='/signup' component={Signup} />
<Route path='/login' component={Login} />
<Route path='/gallery' component={New} />
<Route path='*' component={() => <h1> Página não encontrada :( </h1>} />

</Switch>
</BrowserRouter>

    );
}


export default Routes;