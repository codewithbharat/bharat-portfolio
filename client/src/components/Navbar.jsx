import React, { useEffect, useState } from 'react'
import './styles/Navbar.css'

import { Link, NavLink } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        if (width > 480) {
            setToggle(true);
        }
    }, []);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div id='nav' className="navbar" onClick={() => scrollTop()}>
            <div className="navbar__brand">
                <Link to="/" className='navbar__brand-name'>bharat-ranjan</Link>
            </div>
            <div className="navbar__ham" onClick={() => setToggle(!toggle)}>
                <span>
                    {!toggle && <RxHamburgerMenu />}
                </span>

                <span>
                    {toggle && <RxCross1 />}
                </span>
            </div>

            {!toggle && <div id='nav__web' className="navbar__links">
                <div className="navbar__links-left" onClick={() => { scrollTop(); setToggle(!toggle); }}>
                    <NavLink className="navbar__links-left__link" to="/">_hello</NavLink>
                    <NavLink className="navbar__links-left__link" to="/about">_about-me</NavLink>
                    <NavLink className="navbar__links-left__link" to="/projects">_projects</NavLink>
                </div>
                <div className="navbar__links-right" onClick={() => { scrollTop(); setToggle(!toggle); }}>
                    <NavLink className="navbar__links-right__link" to="/contact">_contact-me</NavLink>
                </div>
            </div>}

            {toggle && <div className="navbar__links">
                <div className="navbar__links-left" onClick={() => { scrollTop(); setToggle(!toggle); }}>
                    <NavLink className="navbar__links-left__link" to="/">_hello</NavLink>
                    <NavLink className="navbar__links-left__link" to="/about">_about-me</NavLink>
                    <NavLink className="navbar__links-left__link" to="/projects">_projects</NavLink>
                </div>
                <div className="navbar__links-right" onClick={() => { scrollTop(); setToggle(!toggle); }}>
                    <NavLink className="navbar__links-right__link" to="/contact">_contact-me</NavLink>
                </div>
            </div>}


        </div>

    )
}

export default Navbar