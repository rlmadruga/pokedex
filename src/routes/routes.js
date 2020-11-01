import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

export default function Routes() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Signup} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/home' component={Home} />
          <Route path='*' component={() => <div>Pagina 404</div>} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
