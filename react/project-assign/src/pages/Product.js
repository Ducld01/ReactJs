import React from 'react'
import { Link } from 'react-router-dom'
import Layoutproduct from '../component/Layoutproduct'
const Product = (props ) => {
    const AllProduct = () => {
       return (
        <>
                    <div className="product-search">
                        <div className="row">
                            <div className="col-lg-7 col-md-7"></div>
                            <div className="col-lg-5 col-md-5 text-right search-input-product">
                                <input type="text" placeholder="Search" className="input-content" />
                            </div>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="row">
                            {props.data.map((product) => {
                                return (
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <Link to={`/product/${product._id}`} className="product-image">
                                                <img src={`http://localhost:5000/api/product/photo/${product._id}`} className="product-img" alt={product.name} />
                                            </Link>
                                            <div className="product-text">
                                                <Link to={`/product/${product._id}`} >
                                                    <h5 className="product-name" >{product.name}</h5>
                                                </Link>
                                                <div className="product-price">
                                                    <span className="ml-20 product-price-content">{product.price}  <strong style={{color: 'red'}}>VND</strong></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
              </>  
    ) 
    }
    
    return(
        <Layoutproduct {...props}>
            {AllProduct()}
        </Layoutproduct>
    )
}

export default Product
