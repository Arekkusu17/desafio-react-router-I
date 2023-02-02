import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  let activeClassName = "nav-link bg-light text-dark "
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg bg-danger ">
        <div className="container-fluid">
          <h2 className='text-light order-lg-3'>HAPPY CAKE 🎂</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink to='/' className={({ isActive }) =>
                  isActive ? activeClassName : 'nav-link'
                }>🏠 Home</NavLink>
              </li>
              <li className="nav-item order-lg-2">
                <NavLink to='/contact' className={({ isActive }) =>
                  isActive ? activeClassName : 'nav-link'
                }>📒 Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
