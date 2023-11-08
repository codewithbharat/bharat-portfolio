import React from 'react'
import './styles/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="siderbar__dropMenu">
                <span className="sidebar__dropMenu-icon"></span>
                <span className="sidebar__dropMenu-name"></span>
            </div>
            <div className="sidebar__links">
                <span className="sidebar__links-icon"></span>
                <span className="sidebar__links-name"></span>
            </div>
        </div>
    )
}

export default Sidebar