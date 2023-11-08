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

    const NavbarLinks = () => {
        const LinksLeft = [
            { to: "/", text: "_hello" },
            { to: "/about", text: "_about-me" },
            { to: "/projects", text: "_projects" }
        ]
        return (
            <>
                <div className="navbar__links-left" onClick={() => { scrollTop(); setToggle(!toggle); }}>
                    {
                        LinksLeft.map((link) => (
                            <NavLink key={link.text} to={link.to} className="navbar__links-left__link">{link.text}</NavLink>
                        ))
                    }
                </div>
                <div className="navbar__links-right" onClick={() => { scrollTop(); setToggle(!toggle); }}>
                    <NavLink to="/contact" className="navbar__links-right__link">_contact-me</NavLink>
                </div>
            </>
        )
    }

    return (
        <div id='nav' className="navbar" onClick={() => scrollTop()}>
            <div className="navbar__brand">
                <Link to="/" className='navbar__brand-name'>bharat-ranjan</Link>
            </div>
            <div className="navbar__ham" onClick={() => setToggle(!toggle)}>
                {!toggle ? <RxHamburgerMenu /> : <RxCross1 />}
            </div>

            {!toggle && <div id='nav__web' className="navbar__links">
                <NavbarLinks />
            </div>}

            {toggle && <div className="navbar__links">
                <NavbarLinks />
            </div>}


        </div>

    )
}

export default Navbar