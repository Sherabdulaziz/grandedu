
import { Link, NavLink } from 'react-router-dom';
import "../styles/Navbar.scss"

import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container">
        <Link className="navbar-brand" to="/"><img src="/image/logo.svg" alt="img" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src="" alt="" /></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <strong>+998 55 500 34 34</strong>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}


