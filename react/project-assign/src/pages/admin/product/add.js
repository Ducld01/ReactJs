import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
const AdminProductAddPage = ({ onAdd, categories }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    // const onHandleSubmit = (data) => {
    //     console.log(data);
    //     onAdd(data)
    //     history.push('/admin/product')
    // }
    const onHandleSubmit = (data) => {
        const {token, user} = JSON.parse(localStorage.getItem('user'))
        const uploads = new FormData();
        // const imageAdd = document.querySelector('#product-image').files[0];
        uploads.append("name", data.name);
        uploads.append("price", data.price);
        uploads.append("photo",data.photo[0]);
        uploads.append("quantity", data.quantity);
        uploads.append("category", data.category);
        uploads.append("description", data.description);
        uploads.append("shipping", data.shipping);
        onAdd(uploads, token, user._id);
        // console.log(imageAdd)
        // console.log(data)
        history.push('/admin/product');
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
                <h1 className="h2">Thêm sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link className="btn btn-primary" to="/admin/product">Quay Lại</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        {...register('name', { required: true })}
                    ></input>
                    <label htmlFor="product-name">Tên Sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-image" className="form-label">Ảnh</label>
                    <input type="file" className="form-control" 
                        id="product-image" 
                        placeholder="Ảnh"
                        {...register('photo')}
                    />
                    {errors.photo && <span className="text-danger mt-2">This fied is required</span>}
                </div>

                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        placeholder="Giá sản phẩm"
                        {...register('price', { required: true })}
                    ></input>
                    <label htmlFor="product-price">Giá Sản phẩm</label>
                    {errors.price && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        placeholder="Số lượng"
                        {...register('quantity')}
                    ></input>
                    <label htmlFor="product-quantity">Số lượng</label>
                    {errors.quantity && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="mb-3">
                    <label for="product-category" className="form-label">Danh mục:</label>
                    <select className="mb-3 ml-3" aria-label="Default select example"
                        id="product-category"
                        placeholder="Danh mục"
                        {...register('category', { required: true })}
                    >
                        {
                            categories.map((category, index) => {
                                return (
                                    <option value={`${category._id}`} key={`${index}`} >{category.name}</option>
                                )
                            })
                        }
                    </select>
                    {errors.category && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-description"
                        placeholder="Miêu tả sản phẩm"
                        {...register('description', { required: true })}
                    ></input>
                    <label htmlFor="product-description">Miêu tả sản phẩm</label>
                    {errors.description && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="checkbox" {...register('shipping')} /> Shipping
            </div>
                <button type="submit" className="btn btn-primary">Gửi</button>
            </form>
        </div>
    )
}

export default AdminProductAddPage
