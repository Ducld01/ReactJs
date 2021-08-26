import React, {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, Link , useParams} from 'react-router-dom';
import CategoryAPI from '../../../api/categoryAPI';

const AdminCategoryEditPage = ({onEditCategory}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    let { id } = useParams();
    console.log(id);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // call api 
        const getCategories = async () => {
            try {
                const {data} = await CategoryAPI.get(id);
                setCategories(data);
                reset(data)
            }
            catch (error) {
                console.log(error);
            }
        }
        getCategories();
    }, [])
    const onHandleSubmit = (data) => {
        const {token, user} = JSON.parse(localStorage.getItem('user'));

        onEditCategory(id, data, token, user._id);

        history.push('/admin/category');
    }
    return (
        <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <h1 className="h2">Sửa Danh mục</h1>
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
                defaultValue={categories.name}
                {...register('name' ,{required:true})}
            ></input>
            <label >Tên Danh mục</label>
            {errors.name && <span className="text-danger mt-2">This fied is required</span>}
        </div>
        <button type="submit" className="btn btn-primary">Gửi</button>
        </form>
    </div>
    )
}

export default AdminCategoryEditPage