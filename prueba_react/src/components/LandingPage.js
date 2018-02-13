import React, {Component} from 'react';
// import Button from 'material-ui/Button';
import LoginForm from './LoginForm';
import {withRouter} from 'react-router-dom';
import * as routes from '../constants/routes';
import firebase from 'firebase';

class LandingPage extends Component {

    handleAuth() {
        let that=this;
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log(result.user.email + ' ha iniciado sesion');
                that.props.history.push(routes.HOME);
            })
            .catch(error => console.log('Error ' + error.code + ': ' + error.message))

    }

    render() {
        return (
            /*<Button color="primary" variant="raised" onClick={this.handleAuth.bind(this)}>Login con Google</Button>*/
            <LoginForm/>
        );
    }
}

export default withRouter(LandingPage);