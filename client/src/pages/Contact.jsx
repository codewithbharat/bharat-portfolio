import React, { useEffect } from 'react'
import './styles/Contact.css'
import Tab from '../components/Tab'
import Sidebar from '../components/Sidebar'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Me";
    }, []);
    return (
        <div className="contact">
            <Tab name="contacts" />
            <Sidebar brand="Contact">
                children
            </Sidebar>
            contact me
        </div>
    )
}

export default Contact