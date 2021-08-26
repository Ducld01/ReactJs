import React, {useState} from 'react'

const AddProduct = ({onAdd}) => {
    const [fields, setFields] = useState({
        productName: '',
        productPrice:'',
        productQuantity:'',
        productCategory:'',
        productDescription:''
    })
    const onHandleChange = (e) =>{
        const {name, value} = e.target;
        setFields({
            ...fields,
            [name]: value
        })
    }
    const onHandleSubmit = (e) =>{
        e.preventDefault();
        onAdd(fields);
    }
    return (
        <form onSubmit={onHandleSubmit}>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                <input type="text" placeholder="Tên sản phẩm" name="productName" id="productName" className="form-control"  onChange={onHandleChange} />
            </div>
            {/* <div className="mb-3">
                <label htmlFor="product-name" className="form-label">Ảnh</label>
                <input type="file" id="product-image" className="form-control" />
            </div> */}
            <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Giá</label>
                <input type="number" placeholder="Giá sản phẩm" name="productPrice" id = "productPrice" className="form-control"  onChange={onHandleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="productQuantity" className="form-label">Số lượng</label>
                <input type="number" placeholder="Số lượng" name="productQuantity"  id ="productQuantity" className="form-control" onChange={onHandleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">Danh Mục</label>
                <select name="productCategory" onChange={onHandleChange}>
                    <option value="" selected hidden></option>
                    <option value="adidas">Adidas</option>
                    <option value="nike">Nike</option>
                </select>
            </div>
            {/* <div className="mb-3">
                <label htmlFor="product-name" className="form-label">Danh mục:</label>
                <select className="mb-3" id="category-id" aria-label="Default select example">
                    ${'{'}categories.categories.map(category =&gt; {'{'}
      return `<option value="${category._id}">${'{'}category.name{'}'}</option>
      `
      {'}'}).join(""){'}'}
                </select>
            </div> */}
            <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">Miêu tả</label>
                <input type="text" placeholder="Miêu tả" name="productDescription" className="form-control" onChange={onHandleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Thêm</button>
        </form>

    )
}

export default AddProduct
