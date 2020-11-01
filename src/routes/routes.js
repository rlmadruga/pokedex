import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
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
          <Route path='/home' component={Home} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
