import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import { firebaseAppAuth } from './config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends Component {


  render() {
    const { user } = this.props;
    return (
      <Router>
        <div className="App">
          <Navbar brand='DIY Design' />
          <div className='container-fluid'>
            {
              user ? (<Switch>
                          <Route exact path='/' component={Home} />
                          <Route exact path='/dashboard' component={Dashboard} />
                      </Switch>) 
                    : (<Switch>
                           <Route exact path='/' component={Home} />
                      </Switch>)
            }
          </div>
        </div>
      </Router>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);