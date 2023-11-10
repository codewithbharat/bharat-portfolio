import React, { useEffect } from 'react'
import './styles/Projects.css'
import Tab from '../components/Tab'
import Sidebar from '../components/Sidebar'

import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { DiNodejsSmall } from 'react-icons/di'
import { GiSpiderWeb } from 'react-icons/gi'

const Projects = () => {
    useEffect(() => {
        document.title = "Projects";
    }, []);

    const LinkData = [
        { icon: <FaReact />, name: "React" },
        { icon: <IoLogoJavascript />, name: "JavaScript" },
        { icon: <DiNodejsSmall />, name: "ExpressJs" },
        { icon: <GiSpiderWeb />, name: "Full-Stack" }

    ]

    const SidebarLink = ({ icon, name, link }) => {
        return (
            <div className="projects__sidebar__link">
                <span><input type='checkbox' className="projects__sidebar__link-checkbox" id={name} /></span>
                <span className="projects__sidebar__link-icon"> {icon} </span>
                <a href={link} className="projects__sidebar__link-name">{name}</a>
            </div>
        )
    }
    return (
        <div className="projects">
            <Sidebar brand="Projects">
                {
                    LinkData.map(({ icon, name, }) => (
                        <SidebarLink icon={icon} name={name} />
                    ))
                }
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