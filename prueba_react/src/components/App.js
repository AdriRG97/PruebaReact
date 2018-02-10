import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import UserList from "./UserList";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
    constructor(){
        super();
        this.state = {
            users: [
                {id:1, name: "Yo xd", ip: "192.168.1.1"},
                {id:2, name: "Raquel supongo", ip:"192.168.1.2"}
            ]
        };
    }

  render() {
    return (
        <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <UserList users={this.state.users}/>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
