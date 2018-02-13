import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import * as routes from '../constants/routes';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import LandingPage from './LandingPage';
import firebase from 'firebase';

import HomePage from './HomePage';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {


    render() {
        return (
            <Router>
                {/*<MuiThemeProvider>*/}
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                        <br/>
                        <Route
                            exact path={routes.LANDING}
                            render={function () {
                                if (firebase.auth().currentUser !== null) {
                                    return <Redirect to={routes.HOME}/>
                                } else {
                                    return <LandingPage/>
                                }
                            }}
                        />
                        <Route
                            exact path={routes.HOME}
                            render={function () {
                                if (firebase.auth().currentUser === null) {
                                    return <Redirect to={routes.LANDING}/>
                                } else {
                                    return <HomePage/>
                                }
                            }}
                        />
                    </div>
                {/*</MuiThemeProvider>*/}
            </Router>
        );
    }
}

export default App;
