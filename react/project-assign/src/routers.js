import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import LayoutAdmin from './layouts/admin';
import LayoutWebsite from './layouts/website';
import Home from './pages/Home';
import About from './pages/About';
import NotFoundPage from './pages/404';
import Product from './pages/Product';
// import Products from './component/Products'
import ProductDetailPage from './pages/productDetail';
// import AddProduct from './component/AddProduct';
import AdminProductAddPage from './pages/admin/product/add'
import AdminProductPage from './pages/admin/product';
import AdminProductEditPage from './pages/admin/product/edit';
import Signup from './pages/admin/user/signup';
import SignIn from './pages/admin/user/signin';
import AdminCategoryPage from './pages/admin/category';
import AdminCategoryAddPage from './pages/admin/category/add';
import AdminCategoryEditPage from './pages/admin/category/edit';
import PrivateRoute from './auth/privateRouter';
import UserDashborad from './pages/admin/user/userDasboard';
import Categorypage from './pages/categorypage';
const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/admin/:path?/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <PrivateRoute exact path="/admin/dashboard">
                                <UserDashborad />
                            </PrivateRoute>

                            <Route exact path="/admin">
                                <Redirect to="/admin/product" />
                            </Route>
                            
                            <Route exact path="/admin/product">
                                <AdminProductPage {...props} />
                            </Route>
                            <Route exact path="/admin/addproduct">
                                <AdminProductAddPage {...props} />
                            </Route>
                            <Route exact path="/admin/product/:id">
                                <AdminProductEditPage {...props} />
                            </Route>
                            <Route exact path="/admin/category">
                                <AdminCategoryPage {...props} />
                            </Route>
                            <Route exact path="/admin/addcategory">
                                <AdminCategoryAddPage {...props} />
                            </Route>
                            <Route exact path="/admin/category/:id">
                                <AdminCategoryEditPage {...props} />
                            </Route>
                        </Switch>

                    </LayoutAdmin>
                </PrivateRoute>
                <Route>
                    <LayoutWebsite>
                        <Route exact path="/">
                            <Home {...props} />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/userdashboard">
                            <UserDashborad />
                        </Route>
                        <Route exact path="/product">
                            <Product {...props} />
                        </Route>
                        <Route exact path="/category/:id">
                            <Categorypage {...props} />
                        </Route>
                        <Route exact path="/product/:id">
                            <ProductDetailPage {...props} />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                        <Route exact path="/signin">
                            <SignIn />
                        </Route>
                        <Route exact path="*">
                            <NotFoundPage />
                        </Route>
                    </LayoutWebsite>
                </Route>
            </Switch>

        </Router>
    )
}

export default Routers
