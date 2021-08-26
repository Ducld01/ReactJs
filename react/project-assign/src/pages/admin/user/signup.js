import React, { useState } from 'react'
import Layout from '../../../component/layout'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { signUp } from '../../../auth/index'

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmit = (data) => {
        signUp(data)
            .then(dataInput => {
                if (dataInput.error) {
                    setError(dataInput.error)
                }
                else {
                    setError("");
                    setSuccess(true)
                }
            })
    }
    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
                {error}
            </div>
        )
    }
    const showSuccess = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? "block" : "none" }}>
                Bạn đã tạo tài khoản thành công. Click để <Link to="/signin">Đăng nhập</Link>
            </div>
        )
    }
    const signUpForm = () => {
        return (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">User name</label>
                            <input type="text" className="form-control" placeholder="Name" aria-label="Name" 
                            id="name"
                            {...register('name')}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" 
                            id="email"
                            {...register('email')}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" 
                            id="password"
                            {...register('password')}
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                        </div>
                    </form>
        )
    }
    return (
        <Layout  description = "Join our network of professionals" link = "/signin" content="Already have an account? "  pages="Signin">
            {showError()}
            {showSuccess()}
            {signUpForm()}
        </Layout>
       
    )
}

export default Signup
