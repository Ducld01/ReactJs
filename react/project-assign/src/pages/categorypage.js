import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Layoutproduct from '../component/Layoutproduct';
const Categorypage = (props) => {
    let { id } = useParams();
    const result = props.data.filter((product) => product.category == id).map((product) => {
        return (
            <div className="product-list">
                
                    <div className="col-lg-4 col-sm-6">
                        <div className="product-item">
                            <Link to={`/products/${product._id}`} className="product-image">
                                <img src={`http://localhost:5000/api/product/photo/${product._id}`} className="product-img" alt={product.name} />
                            </Link>
                            <div className="product-text">
                                <Link to={`/product/${product._id}`} >
                                    <h5 className="product-name" >{product.name}</h5>
                                </Link>
                                <div className="product-price">
                                    <span className="ml-20 product-price-content">{product.price}  <strong style={{ color: 'red' }}>VND</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    })
   return(
       <Layoutproduct {...props}>
           <div className="row">
               {result}
           </div>
           
       </Layoutproduct>
   )
}

export default Categorypage
