
import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductAPI from './api/productAPI'
import CategoryAPI from './api/categoryAPI'
import Routers from './routers';
import API from './config'

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // call api 
    const getProducts = async()=>{
      try{
        const {data: products} = await ProductAPI.getAll();
        // console.log(dataProduct);
        // console.log(products)
        setProducts(products);
      }
      catch (error)
      {
        console.log(error);
      }
    }
    getProducts();
    const getCategories = async()=>{
      try{
        const {data: categories} = await CategoryAPI.getAll();
       
        // console.log('categories', categories)
        setCategories(categories);
      }
      catch (error)
      {
        console.log(error);
      }
    }
    getCategories();
  }, [])
  const removeProducts = async (id, token, idUser) => {
    try {
      await ProductAPI.remove(id, token, idUser)
      const newProducts = products.filter(item => item._id !== id);
      setProducts(newProducts)
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  }
  const onHandleAddProduct = async (product, token, id) => {
    // console.log(product)
    try {
      const { data} = await ProductAPI.add(product, token, id);//sau khi add vao api thi tra ve du lieu va gan vao bien data
        setProducts([
          ...products,
          data // sau do render ra ngoai man hinh
        ])
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleEditProduct = async (id, product, token, iduser) => {
    try {
      await ProductAPI.update(id, product, token, iduser);
      const { data:newProducts } = await ProductAPI.getAll();
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  }
  const removeCategories = async (id, token, idUser) => {
    try {
      await CategoryAPI.remove(id, token, idUser);
      const { data:newCategories } = await CategoryAPI.getAll();
      setCategories(newCategories )
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  }
  const onHandleAddCategory = async (category, token, idUser) => {
    try {
      await CategoryAPI.add(category, token, idUser);
      const {data: newCategories} = await CategoryAPI.getAll();
        setCategories(newCategories)
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleEditCategory= async (id, data, token, idUser) => {
    try {
      await CategoryAPI.update(id, data, token, idUser);
      const {data: newCategories} = await CategoryAPI.getAll();

      // const newCategories = categories.map(item => (item._id === id ? data : item));
      // console.log('newCategories',newCategories);
      setCategories(newCategories)
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="container">
      <Routers 
      //Product
        data={products} 
        onDelete={removeProducts} 
        onAdd={onHandleAddProduct}
        onEdit={onHandleEditProduct}
      //Category
        categories={categories}
        onDeleteCategory={removeCategories}
        onAddCategory={onHandleAddCategory}
        onEditCategory={onHandleEditCategory}
        />
    </div>
  )
}

export default App;
