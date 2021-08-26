import React, { useEffect, useState } from 'react'
import {
    useParams
} from 'react-router-dom';
import ProductAPI from '../api/productAPI'
const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        // call api
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                // console.log(result);
                setProduct(data);
            } catch (error) {

            }
        }
        getProduct();
    }, [])
    return (
        <div className="row">
            <div className="col-6">
                <img src={`http://localhost:5000/api/product/photo/${product._id}`} width="600px" />
            </div>
            <div className="col-6">
                <h1 className="h1-name">{product.name}</h1>
                <label className="label-tile">Giá:</label><label>{product.price}</label><br />
                <label className="label-tile">Mô tả:</label><label>{product.description}</label><br />
                <label className="label-tile">Trạng thái:</label><label>{product.status ? "Còn hàng" : "Hết hàng"}</label><br />
                <label className="label-tile">Số Lượng:</label><label>{product.quantity}</label><br />
                <a href className="btn-add-cart">THÊM VÀO GIỎ HÀNG</a>
            </div>
        </div>

    )
}

export default ProductDetailPage
