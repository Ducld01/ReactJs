import React from 'react'
import {Link} from 'react-router-dom'
const Products = (props) => {
    return (
        <div className="container">
            <ul className="list-group">
                {props.data.map((todo, index) => {
                    return <li className="list-group-item d-flex justify-content-between" key={index}>
                        {todo.name}
                        <button className="btn btn-danger btn-sm"
                           onClick={() => props.onDelete(todo._id)}
                        >DELETE</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Products
