import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 280 }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink exact to="/" style={{ textDecoration: 'none' }} className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
        Home
      </NavLink>
        </li>
        <li>
          <NavLink to="/admin/dashboard" style={{ textDecoration: 'none' }} className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
        Dashboard
      </NavLink>
        </li>
        <li>
          <NavLink to="/admin/product" style={{ textDecoration: 'none' }} className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
        Product
      </NavLink>
        </li>
        {/* <li>
      <a href="/admin/product" className="nav-link text-white">
        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
        Products
      </a>
    </li> */}
        <li>

          <NavLink to="/admin/category" style={{ textDecoration: 'none' }} className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
        Category
      </NavLink>

        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <strong>Ducld.Dev</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar
