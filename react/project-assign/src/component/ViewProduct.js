import React from 'react'
import {Link} from 'react-router-dom';
const ViewProduct = (props) => {
    return (
        <div className="row bg-white"> 
            {props.data.map((product, index) => {
            return (
              <div className="col-4 mb-3 text-center" key={index}>
                <div className="card border-0 bg-transparent" >
                    <Link to={`/product/${product._id}`}>
                    <img src={`http://localhost:5000/api/product/photo/${product._id}`} className="card-img-top" alt={product.name} />
                    </Link>
                  <div className="card-body">
                    <span  className="cart-description">{product.description}</span>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-price">{product.price}<u>VND</u></p>
                    {/* <a href={'/product/${product._id}'} className="btn-product">CHI TIẾT SẢN PHẨM</a> */}
                    <Link to={`/product/${product._id}`} className="btn-product">CHI TIẾT SẢN PHẨM</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    )
}

export default ViewProduct
