import React from 'react'
import { Link } from 'react-router-dom'
import useUserContext from '../UserContext'

const Navbar = () => {
  const{ loggedIn, logout }  = useUserContext();
  console.log(loggedIn);
  const showLoggedIn = () => {
    if(loggedIn) {
      return(
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <button style={{ fontFamily: "initial"}} className='btn btn-danger mb-3' onClick={logout} >
              Logout
            </button>
          </li>
        </ul>
      );
    } else{
      return <div className="">
        <div className="">
        <Link className="nav-link" to="/Signup">
                  Signup
                </Link>
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
        </div>
      </div>
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to ="/Home">
                  Home
                </Link>
              </li>
              {showLoggedIn()}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/EventHandling">
                  Event Handling
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AddProduct">
                  AddProduct
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductListing">
                  ProductListing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ManageUsers">
                  ManageUsers
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to ="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to ="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to ="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar