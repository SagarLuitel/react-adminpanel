import React from 'react'
import "./sidebar.css"
import {Home, Analytics} from '@mui/icons-material';
import {Link} from "react-router-dom"

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="dashboard">
                <h5>Dashboard</h5>
                <ul className="sidebarList">
                <Link to="/"> <li className="listItem active"><Home  className="sidebarIcon"/>Home</li></Link>
                    <Link to="/postlist"> <li className="listItem"> <Analytics className="sidebarIcon" />Posts</li></Link>
                </ul>
            </div>
            <div className="dashboard">
                <h5>Quick Menu</h5>
                <ul className="sidebarList">
                    <li className="listItem"><Home  className="sidebarIcon"/>Home</li>
                    <li className="listItem"><Analytics className="sidebarIcon" />Analytics</li>
                </ul>
            </div>
            <div className="dashboard">
                <h5>Notification</h5>
                <ul className="sidebarList">
                    <li className="listItem"><Home  className="sidebarIcon"/>Home</li>
                    <li className="listItem"><Analytics className="sidebarIcon" />Analytics</li>
                </ul>
            </div>
        </div>
    )
}
