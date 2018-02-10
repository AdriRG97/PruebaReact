import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListIcon from 'material-ui-icons/List';
import Button from 'material-ui/Button'

class User extends Component {
    render() {
        return (
            <ListItem>
                <ListItemIcon><ListIcon/></ListItemIcon>
                <ListItemText primary={this.props.name} secondary={this.props.ip}/>
                <Button color="primary">Algo</Button>
            </ListItem>
        );
    }
}

export default User;