import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand mx-4 fs-2" to="#">MERN-APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end fs-2" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/fetch">Fetch</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>

       </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav