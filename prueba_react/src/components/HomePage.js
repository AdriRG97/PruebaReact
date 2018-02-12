import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import UserList from './UserList';
import Button from 'material-ui/Button';
import * as routes from '../constants/routes';
import firebase from 'firebase';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {id: 1, name: "Yo xd", ip: "192.168.1.1"},
                {id: 2, name: "Raquel supongo", ip: "192.168.1.2"}
            ]
        };
    }

    handleAuth(){
        let that=this;
        firebase.auth().signOut()
            .then(function(){
                console.log('Has cerrado sesion');
                that.props.history.push(routes.LANDING);
            })
            .catch(error => console.log('Error '+ error.code +': '+error.message))
    }

    render() {
        return (
            <div>
                <UserList users={this.state.users}/>
                <br/><br/>
                <Link to={routes.LANDING}><Button variant="raised" color="secondary" onClick={this.handleAuth.bind(this)}>Salir</Button></Link>
            </div>
        );
    }
}

export default withRouter(HomePage);