import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as routes from '../constants/routes';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import LandingPage from './LandingPage';
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
                            component={LandingPage}
                        />
                        <Route
                            exact path={routes.HOME}
                            component={()=><HomePage/>}
                        />
                    </div>
                {/*</MuiThemeProvider>*/}
            </Router>
        );
    }
}

export default App;
