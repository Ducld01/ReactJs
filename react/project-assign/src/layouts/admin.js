import React from 'react'
import Sidebar from '../component/Sidebar';
const LayoutAdmin = (props) => {
    return (
        <div className="row">
            <div className="col-4">
                <Sidebar/>
            </div>
            <div className="col-8">{props.children}</div>
        </div>
    )
}

export default LayoutAdmin;
