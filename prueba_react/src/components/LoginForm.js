import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import * as routes from '../constants/routes';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import firebase from 'firebase';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            pass: ''
        };

    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePass(event) {
        this.setState({pass: event.target.value});
    }

    handleAuth() {
        let that = this;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
            .then(function () {
                console.log("Logged In");
                that.props.history.push(routes.HOME);
            })
            .catch(function (error) {
                alert(error.code + ": " + error.message);
                that.clear();
            })
    }

    clear() {
        this.setState({
            email: '',
            pass: ''
        })
    }

    render() {
        return (
            <form>
                <TextField id="email" label="Correo electronico" value={this.state.email}
                           onChange={this.handleChangeEmail.bind(this)}/><br/>
                <TextField id="pass" label="Contraseña" type="password" value={this.state.pass}
                           onChange={this.handleChangePass.bind(this)}/><br/>
                <Button color="primary" variant="raised" style={{margin: "2% 1% 0 0"}}
                        onClick={this.handleAuth.bind(this)}>Acceder</Button>
                <Button color="secondary" variant="raised" style={{marginTop: "2%"}} onClick={this.clear.bind(this)}>Borrar</Button>
            </form>
        );
    }
}

export default withRouter(LoginForm);