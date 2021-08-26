import React from 'react'
import {Link} from 'react-router-dom'
const AdminCategoryPage= ({categories, onDeleteCategory}) => {
    const {token, user} = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <div className="d-flex justify-content-between items-center">
                <h1>Category Manager</h1>
                <div>
                    <Link to="/admin/addcategory" className="btn btn-primary">Add</Link>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{category.name}</td>
                            <td>
                                <Link to={`/admin/category/${category._id}`} className="btn btn-primary">Edit</Link>
                                <button className="btn btn-danger btn-sm"
                                    onClick={() => onDeleteCategory(category._id,token, user._id)}
                                >DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminCategoryPage
