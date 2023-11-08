import React, { useEffect } from 'react'
import './styles/Projects.css'
import Tab from '../components/Tab'
import Sidebar from '../components/Sidebar'

const Projects = () => {
    useEffect(() => {
        document.title = "Projects";
    }, []);
    return (
        <div className="projects">
            <Sidebar brand="Projects">
                children
            </Sidebar>
            <Tab name="contacts" />
            projects
        </div>
    )
}

export default Projects