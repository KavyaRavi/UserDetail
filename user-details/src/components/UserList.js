import React from 'react';
import UserItem from './UserItem';

const UserList = ({users, onUserSelect}) => {

    const userList = users.map(user => {
        return <UserItem key={user.id} onUserSelect={onUserSelect} user={user} />
    })

    return (
        <div>{userList}</div>
    )

}

export default UserList;