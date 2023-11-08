import React from 'react'
import './styles/Contact.css'
import Tab from '../components/Tab'
import Sidebar from '../components/Sidebar'

const Contact = () => {
    return (
        <div className="contact">
            <Tab name="contacts" />
            <Sidebar />
            contact me
        </div>
    )
}

export default Contact