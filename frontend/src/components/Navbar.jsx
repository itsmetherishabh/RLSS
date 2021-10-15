import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-2'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            RLSS
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/career'>
                  Career Options
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Colleges
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/enroll'>
                  Enroll
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/assessment'>
                  Assessment
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Assessment2
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Science</a></li>
                  <li><a className="dropdown-item" href="/">Commerce</a></li>
                  <li><a className="dropdown-item" href="/">Commerce with IP</a></li>
                  <li><a className="dropdown-item" href="/">Humanties</a></li>
                  <li><a className="dropdown-item" href="/">UPSC Prep</a></li>
                </ul>
              </li>
              
              <div class="btn-group">
                <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Assessment3
                </button>
                <ul class="dropdown-menu bg-info">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                  {/* <li><hr class="dropdown-divider"/></li> */}
                  <li><a class="dropdown-item" href="/">Separated link</a></li>
                </ul>
              </div>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  ContactUs
                </Link>
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
