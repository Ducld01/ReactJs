import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Redirect, useHistory} from 'react-router-dom'
import {signIn, athenticate, isAuthenticated} from '../../../auth/index'
import Layout from '../../../component/layout'

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToRef, setRedirectToRef] =  useState(false);
    const {user} = isAuthenticated();

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                // console.log(dataUser.error)
                if (dataUser.error) {
                    setError(dataUser.error)
                    setLoading(false)
                }
                else {
                    athenticate(dataUser,() =>{
                         history.push('/')
                         setRedirectToRef(true)
                    })
                    // console.log(dataUser)
                }
            })
    }
    const redirectUser = () => {
        if(redirectToRef){
            if(user.role == 0 ){
                return <Redirect to='/admin'/>
            } else {
                return <Redirect to='/'/>
            }
        }
    }
    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
                {error}
            </div>
        )
    }
    const showLoading = () => {
        return (
            loading && <div className="alert alert-info">
                <h2>...Loading</h2>
            </div>
        )
    }
    const signInForm = () => {
        return (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" 
                                    id="email"
                                    {...register('email')}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" 
                                    id="password"
                                    {...register('password')}
                                />
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary bg-gradient-info w-100 mt-4 mb-2">Đăng Nhập</button>
                            </div>
                        </form>
        )
        
    }
    return (

        <Layout title="Sign In" description = "wecom to signin" link = "/signup" content="Click to signup"  pages="Signup">
            {redirectUser()}
            {showError()}
            {showLoading()}
            {signInForm()}
        </Layout>

    )
}

export default SignIn
