//import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className="header">
      <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo left">Qterm</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/setting">Setting</Link></li>
            <li><Link to="/account">Account</Link></li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Header