import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="nav">
      <div className="nav_burger" onClick={() => setShow(!show)}>
        <i className="ri-menu-3-line"></i>
      </div>
      <ul className={`nav_list ${show ? 'nav_mobile' : ''}`}>
        <li className="nav_list__item nav-brand">
          <h5>fozil zayn</h5>
        </li>
        <li className="nav_list__item">
          <Link to={"/"}>_hello</Link>
        </li>
        <li className="nav_list__item">
          <Link to={"/about-me"}>_about-me</Link>
        </li>
        <li className="nav_list__item">
          <Link to={"/projects"}>_projects</Link>
        </li>
        <li className="nav_list__item nav_list__contact">
          <Link to={"/contact-me"}>_contact-me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar