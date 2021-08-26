import React from 'react'
import {Link} from 'react-router-dom'

const Layout = ({ description = "description",link = "link",content="content", pages="pages", className, children}) => {
    return (
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto ">
                <div className="card z-index-0 mt-8">
                    <div className="card-header text-center pt-4 pb-1">
                        <h4 className="font-weight-bolder mb-1"></h4>
                        <p className="mb-0">{description}</p>
                    </div>
                    <div className="card-body pb-0">
                        {children}
                    </div>
                    
                </div>
            </div>
    )
}

export default Layout
