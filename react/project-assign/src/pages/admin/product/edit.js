import React, {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, Link , useParams} from 'react-router-dom';
import ProductAPI from '../../../api/productAPI'


const AdminProductEditPage = ({ onEdit , categories }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState({}); 


    
    const onHandleSubmit = (data) => {
        const {token, user} = JSON.parse(localStorage.getItem('user'))
        const uploads = new FormData();
        // console.log(data)


        uploads.append("name", data.name);
        uploads.append("price", data.price);
        uploads.append("photo", data.photo[0]);
        uploads.append("quantity", data.quantity);
        uploads.append("category", data.category);
        uploads.append("description", data.description);
        uploads.append("shipping", data.shipping);

        onEdit(id, uploads, token ,user._id);
        
        history.push('/admin/product');
    }
    useEffect(() => {
        // call api 
        const getProducts = async () => {
            try {
                const {data} = await ProductAPI.get(id);
                setProduct(data);
                // reset(data)
            }
            catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
                <h1 className="h2">Sửa sản phẩm</h1>
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
                        defaultValue={product.name}
                        {...register('name', )}
                    ></input>
                    <label >Tên Sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Ảnh</label>
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
                        defaultValue={product.price}
                        {...register('price', )}
                    ></input>
                    <label >Giá Sản phẩm</label>
                    {errors.price && <span className="text-danger mt-2">This fied is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        placeholder="Số lượng"
                        defaultValue={product.quantity}
                        {...register('quantity')}
                    ></input>
                    <label >Số lượng</label>
                </div>
                <div className="mb-3">
                    <label for="product-category" className="form-label">Danh mục:</label>
                    <select className="mb-3 ml-3" aria-label="Default select example"
                        id="product-category"
                        placeholder="Danh mục"
                        defaultValue={product.category}
                        {...register('category', )}
                    >
                        {
                            categories.map((category, index) => {
                                return (
                                    <option value={`${category._id}`} key={`${index}`} >{category.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-description"
                        placeholder="Miêu tả sản phẩm"
                        defaultValue={product.name}
                        {...register('description', )}
                    ></input>
                    <label >Miêu tả sản phẩm</label>
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

export default AdminProductEditPage
