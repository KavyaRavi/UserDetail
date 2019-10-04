import React from 'react';
import axios from '../apis/gituser';
import UserList from './UserList';
import UserDetail from './UserDetail';

export default class App extends React.Component {

    state = {users: [], selectedUser: null};

    componentDidMount = async () => {
        const response = await axios.get('/users');
        this.setState({
            users: response.data,
            selectedUser: response.data[0]
        });
    }

    onUserSelect = (user) => {
        this.setState({selectedUser: user});
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <UserDetail user={this.state.selectedUser} />
                    </div>
                    <div className="col-md-6">
                        <UserList users={this.state.users} onUserSelect={this.onUserSelect} />
                    </div>
                </div>
            </div>
        )
    }
}