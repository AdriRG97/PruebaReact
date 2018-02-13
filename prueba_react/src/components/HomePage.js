import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserList from './UserList';
import Button from 'material-ui/Button';
import * as routes from '../constants/routes';
import firebase from 'firebase';
// eslint-disable-next-line
import firestore from 'firebase/firestore';

class HomePage extends Component {
    constructor() {
        super();

        let that = this;
        let db = firebase.firestore();
        db.collection("ips").onSnapshot((querySnapshot) => {
            let cnt = 1;
            that.state.users = [];
            querySnapshot.forEach((doc) => {
                let user = {
                    id: cnt,
                    name: doc.get("alias"),
                    ip: doc.get("ip")
                };
                that.setState({
                    users: that.state.users.concat(user)
                });
                cnt++;
            });
        });

        this.state = {
            users: []
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
                <Button variant="raised" color="secondary" onClick={this.handleAuth.bind(this)}>Salir</Button>
            </div>
        );
    }
}

export default withRouter(HomePage);