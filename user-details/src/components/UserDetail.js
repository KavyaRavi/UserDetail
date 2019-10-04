import React from 'react';
import './UserDetail.css';

const UserDetail = (props) => {
    console.log(props);

    if (props.user) {

        return (
            <div className="container">
                <img src={props.user.avatar_url} />
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default UserDetail;