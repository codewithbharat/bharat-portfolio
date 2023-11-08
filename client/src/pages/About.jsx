import React, { useEffect } from 'react'
import './styles/About.css'
import Tab from '../components/Tab'
import Sidebar from '../components/Sidebar'

const About = () => {
    useEffect(() => {
        document.title = "About Me";
    }, []);
    return (
        <div className="about">
            <Sidebar brand="About">
                children
            </Sidebar>
            <Tab name="about-me" />
        </div>
    )
}

export default About