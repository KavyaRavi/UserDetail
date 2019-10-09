import React from 'react';
import './UserItem.css';

const UserItem = (props) => {
    return (
        <div className='item container d-flex mt-5' onClick={() => {props.onUserSelect(props.user)}}>
            {/* <img src={props.user.avatar_url} onClick={() => {props.onUserSelect(props.user)}} /> */}
            <h4 className="ml-5">{props.user.login}</h4>
        </div>
    )
}

export default UserItem;