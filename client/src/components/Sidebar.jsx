import React, { useEffect, useState } from 'react'
import './styles/Sidebar.css'
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi"
import { motion } from 'framer-motion'

const Sidebar = ({ children, brand }) => {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setToggle(true)
        }, 500)
    }, [])
    return (
        <motion.div
            animate={{ x: 0 }}
            initial={{ x: -300 }}
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