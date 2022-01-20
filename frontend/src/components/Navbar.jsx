import React from "react";
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg px-1 py-1' style={{fontSize:"1.2rem"}}>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            RLSS
          </Link>
          <button
            className='navbar-toggler bg-secondary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon bg-light'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mx-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/'>
                  HOME
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/career'>
                  CAREER OPTIONS
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/colleges'>
                  COLLEGES
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/enroll'>
                  ENROLL
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/assessment'>
                  ASSESSMENT
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/enroll2'>
                  Enroll2
                </Link>
              </li> */}
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/careerop'>
                  CareerOp
                </Link>
              </li> */}
              {/* <li className="nav-item dropdown">
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
              </li> */}
              
              {/* <div className="btn-group">
                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Assessment3
                </button>
                <ul className="dropdown-menu bg-info">
                  <li><Link className="dropdown-item" to="/commerce">Action</Link></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  {/* <li><a className="dropdown-item" href="/">Separated link</a></li>
                </ul>
              </div>  */}
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  ContactUs
                </Link>
              </li> */}
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                SEARCH
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
