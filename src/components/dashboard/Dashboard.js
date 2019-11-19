import React, { Component } from 'react';
import Design from '../design/Design';
import Settings from '../design/Settings';
import { storage } from '../../config/firebaseConfig';
import firebase from 'firebase';


class Dashboard extends Component {
    state = {
        imgColor: 'black',
        upperText: 'This is upper text',
        lowerText: 'This is lower text',
        memeImg: '',
        url: '',
        textSize: 44,
        textColor: 'white'
    }

    handleImgColor = (e) => {
        this.setState({
            imgColor: e.target.name
        });
    }

    handleUpperText = (e) => {
        this.setState({
            upperText: e.target.value
        });
    }

    handleLowerText = (e) => {
        this.setState({
            lowerText: e.target.value
        });
    }

    handleImageUpload = (e) => {
        if (e.target.files[0]) {
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);

            uploadTask.on('state_changed',
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        this.setState({ url });
                    })
                })
        }
    }

    handleTextSize = (e) => {
        this.setState({
            textSize: e.target.value
        });

        console.log(this.state.textSize)
    }

    formatText = () => {
        const size = this.state.textSize;
        return parseInt(size);
    }

    handleTextColor = (e) => {
        this.setState({
            textColor: e.target.value
        });
    }

    handleSaveDesign = (e) => {
        const firebaseDBRef = firebase.database().ref('orders').child('shirts');

        this.setState({
            [e.target.name]: e.target.value
        });

        firebaseDBRef.push(this.state);

        console.log(this.state);
        alert('Successfully submitted');

        

    }


    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <Design
                            display={this.state}
                            format={this.formatText()}
                        />
                    </div>
                    <div className='col-lg-4'>
                        <Settings
                            color={this.handleImgColor}
                            upperT={this.handleUpperText}
                            lowerT={this.handleLowerText}
                            imgupload={this.handleImageUpload}
                            textS={this.handleTextSize}
                            textColor={this.handleTextColor}
                            saveDesign={this.handleSaveDesign}
                        />
                    </div>

                </div>

            </div>
        );
    }
}

export default Dashboard;