import React from 'react'
import {isAuthenticated} from '../../../auth/index'

const UserDashborad = () => {
    const {user} = isAuthenticated();
    console.log(user);
    return (
        <div className="card">
            <div className="card-header">Thông tin người dùng</div>
            <ul className="list-group">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">{user.role == 0 ? 'Người quản trị' : 'Người dùng'}</li>
            </ul>
        </div>
    )
}

export default UserDashborad
