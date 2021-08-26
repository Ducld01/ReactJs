import React from 'react'
import Header from '../component/Header';

const LayoutWebsite = (props) => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default LayoutWebsite;
