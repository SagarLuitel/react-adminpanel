import "./topbar.css"
import {NotificationsNone,  Language, Settings} from '@mui/icons-material';


import React from 'react'

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="topLeft">
                <p className="logo">Blog Admin</p>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>  
                    <img src="https://images.unsplash.com/photo-1610085927744-7217728267a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80" alt="user avatar" />
                </div>
            </div>
        </div>
    )
}
