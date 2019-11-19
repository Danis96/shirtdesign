import React, { Component } from 'react';
import Logo from '../../assets/cat.png';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseAppAuth } from '../../config/firebaseConfig';



const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class Home extends Component {


    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        return (
            <div className='jumbotron' style={styles.whiteB}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img style={styles.logo} src={Logo} />
                        </div>
                        <div className='col-md-9'>
                            {
                                user ? (
                                    <div>
                                        <h1 className='display-4'>Hey {user.displayName}, did you know</h1> <br /> <h3>"Everything you can imagine is real." -- Pablo Picasso" </h3>
                                        <p className='lead'>App developed for people who want to design their own shirts.</p>
                                    </div>
                                ) : (
                                        <div>
                                            <h1 className='display-4'>Design your own t-shirt</h1>
                                            <p className='lead'>App developed for people who want to design their own shirts.</p>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <hr className='my-4' />
                    {
                        user ? (<p>Here you can log out</p>)
                            : (<div><p>You must be logged in to start design process. <br />
                                You can just log in with Google.</p>
                            </div>)
                    }
                    {
                        user
                            ? <button className='btn btn-primary' onClick={signOut}>Sign out</button>
                            : <button className='btn btn-primary' onClick={signInWithGoogle}>Sign with Google</button>
                    }

                </div>
            </div>
        );
    }
}


const styles = {
    whiteB: {
        background: '#fff'
    },
    logo: {
        width: '190px'
    },
    marR: {
        marginLeft: '100px'
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Home);