import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const AdminProductPage = ({data, onDelete}) => {
    console.log(data)
    const {token, user} = JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{},[])
    return (
        <div>
            <div className="d-flex justify-content-between items-center">
                <h1>Product Manager</h1>
                <div>
                    <Link to="/admin/addproduct" className="btn btn-primary">Add</Link>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Descriptions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>
                              <img src={`http://localhost:5000/api/product/photo/${product._id}`} width="50px" height="50px" />
                            </td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/admin/product/${product._id}`} className="btn btn-primary">Edit</Link>
                                <button className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(product._id , token, user._id)}
                                >DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminProductPage