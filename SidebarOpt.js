import React from 'react'
import './SidebarOpt.css'

function SidebarOpt({ title, Icon }) {
    return (
        <div className="sidebaropt">
            {Icon && <Icon className="icon" fontSize="Large" />}

            <p>{title}</p>
        </div>
    )
}

export default SidebarOpt
