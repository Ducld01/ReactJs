import React from 'react'
import { Link } from 'react-router-dom'

const Layoutproduct = ({categories, children}) => {
    return (
        <div className="product-page">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-8 products-sidebar-filter">
                    <div className="ftlter-widget">
                        <h4 className="fw-title">Categories</h4>
                        {
                            categories.map((category, index) => {
                                return (
                                    <Link to={`/category/${category._id}`} key={`${index}`} className="cate-menu">{category.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-9 order-1 order-lg-2">
                            {children}
                </div>
            </div>
        </div>
    )
}

export default Layoutproduct
