import React from 'react'
import './styles/Tab.css'
import { RxCross1 } from 'react-icons/rx'
import { AiFillHtml5 } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Tab = ({ name }) => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="tab">
            <div className="tab__icon">
                <AiFillHtml5 />
            </div>
            <div className="tab__name">
                <span>{name}</span>.html
            </div>


            <div className="tab__cross">
                <Link className='a' to="/">
                    <RxCross1 />
                </Link>
            </div>
        </motion.div>
    )
}

export default Tab