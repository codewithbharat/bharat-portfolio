import React, { useEffect, useState } from 'react'
import './styles/Sidebar.css'
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi"
import { motion } from 'framer-motion'

const Sidebar = ({ children, brand }) => {

    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        if (width > 480) {
            setTimeout(() => {
                setToggle(true)
            }, 500);
        }

    }, [])
    return (
        <motion.div
            animate={{ x: 0, y: 0 }}
            initial={{
                x: width > 480 ? -300 : 0,
                y: width < 480 ? -40 : 0
            }}
            transition={{ duration: 0.3 }}
            className="sidebar">
            <div className="sidebar__brand" onClick={() => setToggle(!toggle)}>
                <span className="sidebar__brand-icon">
                    {toggle ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
                </span>
                <span className="sidebar__brand-name"> {brand} </span>
            </div>
            {toggle && <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="sidebar__child">
                {children}
            </motion.div>}
        </motion.div>
    )
}

export default Sidebar