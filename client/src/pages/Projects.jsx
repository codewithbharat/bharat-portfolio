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

            </Sidebar>
            <Tab name="projects" />
            <div className="projects__page">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}


const ProjectCard = () => {
    return (
        <div className="projects__page__card">
            <p className="card-number">Projects 1 <span className="card-name"> // _react-project</span> </p>
            <div className="card">
                <img src="/project.jpeg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quisquam?</p>
                <a href="#">View-project</a>
            </div>
        </div>
    )
}

export default Projects