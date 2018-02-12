import React, {Component} from 'react';
import User from "./User";
import List from 'material-ui/List';


class UserList extends Component {
    render() {
        return (
            <List style={{maxWidth:"50%",margin:"0 auto"}}>
                {this.props.users.map(user => {
                    return(
                        <User
                            key={user.id}
                            name={user.name}
                            ip={user.ip}
                        />
                    )
                })}
            </List>
        );
    }
}

export default UserList;