import React, { useState, useEffect } from 'react'
import {
  NavLink, useHistory
} from 'react-router-dom';
import { signOut, isAuthenticated } from '../auth/index';
import { useLocation } from 'react-router-dom'
const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { user } = isAuthenticated();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    isAuthenticated() && setIsLogged(true)
  }, [pathname, isLogged])


  return (
    // <div className="header">
    //   <div className="header-left">
    //     <p className="h5 my-0 me-md-auto fw-normal">
    //       <svg class="pre-logo-svg ml-10" height="60px" width="60px" fill="#fff" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
    //     </p>
    //   </div>
    //   <div className="header-right">
    //     <nav className="my-2 my-md-0 me-md-3">
    //       <NavLink to="/" style={{ textDecoration: 'none' }} className="header-right-menu">Home </NavLink>
    //       <NavLink to="/product" style={{ textDecoration: 'none' }} className="header-right-menu">Product</NavLink>
    //       <NavLink to="/admin" style={{ textDecoration: 'none' }} className="header-right-menu">Admin</NavLink>
    //       {!isLogged && (
    //         <>
    //           <NavLink to="/signin" style={{ textDecoration: 'none' }} className="header-right-menu">Sign in</NavLink>
    //         </>
    //       )}

    //       {
    //         isLogged &&(
    //           <a className="header-right-menu"
    //           style={{ textDecoration: 'none', cursor: 'pointer'}}
    //           onClick={() => signOut(() => {
    //             setIsLogged(false);
    //             history.push('/')
    //           })}
    //           >
    //             Sign out
    //           </a>
    //         )
    //       }
    //     </nav>
    //   </div>
    // </div>
    <div className="header">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="header-logo">
            <svg class="pre-logo-svg ml-20" height="60px" width="60px" fill="#fff" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <nav className="header-menu">
            <ul>
              <li>
                <NavLink to="/" className="header-menu-content">  Home </NavLink>
              </li>
              <li>
                <NavLink to="/product" className="header-menu-content">  Shop </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="header-menu-content">  Contact </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="header-menu-content">  About </NavLink>
              </li>
              <li>
                <NavLink to="/userdashboard" className="header-menu-content">  Dashboard </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 col-md-3">
          {!isLogged && (
            <>
              <NavLink to="/signin" style={{ textDecoration: 'none' }} className="header-right-menu">Sign in</NavLink>
            </>
          )}

          {isLogged && (
            <>
              <li className="nav-item dropdown">
                <NavLink className="d-inline-block d-sm-none" to="" data-bs-toggle="dropdown">
                   <span className="text-dark">{user.name}</span>
                </NavLink>
                <div className=" show" data-bs-popper="none">
                  <a to="" className="dropdown-item"
                    onClick={() => signOut(() => {
                      setIsLogged(false);
                      history.push('/')
                    })}
                  >
                    Sign Out
                    </a>
                  
                    {user.role == 0 ? 
                      <NavLink className="dropdown-item" to="/admin/product">Admin</NavLink>:''}
                </div>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;
