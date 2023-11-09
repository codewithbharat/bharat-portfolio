import React from 'react'
import './styles/Notfound.css'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div className="notfound">
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link className='a' to="/">
                Go Back to Home
            </Link>
        </div>
    )
}

export default Notfound