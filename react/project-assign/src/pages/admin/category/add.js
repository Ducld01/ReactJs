import React from 'react'
import {useForm} from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
const AdminCategoryAddPage = ({onAddCategory}) => {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    
    const onHandleSubmit = (data) => {
        const {token, user} = JSON.parse(localStorage.getItem('user'));

        onAddCategory(data,token, user._id);

        history.push('/admin/category')
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
            <h1 className="h2">Thêm Danh mục</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <Link className="btn btn-primary" to="/admin/category">Quay Lại</Link>
            </div>
            </div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    id="category-name"
                    placeholder="Tên danh mục"
                    {...register('name' ,{required:true})}
                ></input>
                <label htmlFor="category-name">Tên Danh mục</label>
                {errors.name && <span className="text-danger mt-2">This fied is required</span>}
            </div>
            <button type="submit" className="btn btn-primary">Gửi</button>
            </form>
        </div>
    )
}

export default AdminCategoryAddPage
