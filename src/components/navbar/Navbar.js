import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAppAuth } from '../../config/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';


const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Navbar extends Component {

    render() {
        const {
            user,
            signOut,
        } = this.props;
        console.log(user);

        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-warning'>
                <div className='container'>
                    {
                        user ? (
                            <React.Fragment>
                                <Link to='/' className='navbar-brand text-white'>{this.props.brand}</Link>
                                
                                  <ul className='navbar-nav ml-auto'>
                                        <li className='nav-item '>
                                            <Link to='/dashboard' className='nav-link text-white'>Dashboard</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <button onClick={signOut} className='btn btn-warning'>Log Out</button>
                                        </li>
                                    </ul>
                               

                            </React.Fragment>
                        ) : <Link to='/' className='navbar-brand text-white'>{this.props.brand}</Link>
                    }
                </div>
            </nav>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Navbar);