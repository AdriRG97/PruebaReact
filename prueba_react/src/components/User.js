import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListIcon from 'material-ui-icons/Android';
import Button from 'material-ui/Button'


class User extends Component {
    render() {
        return (
            <ListItem divider>
                <ListItemIcon><ListIcon/></ListItemIcon>
                <ListItemText primary={this.props.name} secondary={this.props.ip}/>
                <Button color="primary">Info</Button>
                <Button color="secondary">Delete</Button>
            </ListItem>
        );
    }
}

export default User;