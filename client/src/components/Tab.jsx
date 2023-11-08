import React from 'react'
import './styles/Tab.css'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Tab = ({ name }) => {
    return (
        <div className="tab">
            <div className="tab__name">
                <span>{name}</span>.html
            </div>


            <div className="tab__cross">
                <Link className='a' to="/">
                    <RxCross1 />
                </Link>
            </div>
        </div>
    )
}

export default Tab