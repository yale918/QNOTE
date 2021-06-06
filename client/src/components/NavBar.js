//import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className="navbar">
      <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo left">QNOTE</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/test">測Fetch</Link></li>
            <li><Link to="/note">紙條</Link></li>
            <li><Link to="/book">筆記本</Link></li>
            <li><Link to="/signin">登入</Link></li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default NavBar