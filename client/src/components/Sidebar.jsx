import React, { useState } from 'react'
import './styles/Sidebar.css'

import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi"

const Sidebar = ({ children, brand }) => {

    const [toggle, setToggle] = useState(true);
    return (
        <div className="sidebar">
            <div className="sidebar__brand" onClick={() => setToggle(!toggle)}>
                <span className="sidebar__brand-icon">
                    {toggle ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
                </span>
                <span className="sidebar__brand-name"> {brand} </span>
            </div>
            {toggle && <div className="sidebar__child">
                {children}
            </div>}
        </div>
    )
}

export default Sidebar