import React from 'react'
import './styles/Navbar.css'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='nav' className="navbar">
            <div className="navbar__brand">
                <Link to="/" className='navbar__brand-name'>bharat-ranjan</Link>
            </div>
            <div className="navbar__links-left">
                <NavLink className="navbar__links-left__link" to="/">_hello</NavLink>
                <NavLink className="navbar__links-left__link" to="/about">_about-me</NavLink>
                <NavLink className="navbar__links-left__link" to="/projects">_projects</NavLink>
            </div>
            <div className="navbar__links-right">
                <NavLink className="navbar__links-right__link" to="/contact">_contact-me</NavLink>
            </div>
        </div>

    )
}

export default Navbar