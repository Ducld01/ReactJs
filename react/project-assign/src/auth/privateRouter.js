import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticated } from './index'

const PrivateRoute = ({ children }) => {
    return (
        <Route render={() =>{
            return isAuthenticated()&&isAuthenticated().user.role ==0 ? children: <Redirect to={{ pathname: 'signin'}} />
        }} />
    )
}

export default PrivateRoute
