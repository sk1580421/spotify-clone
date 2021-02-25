import React from 'react'
import './sidebaroption.css'

function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="icon" fontSize="small" />}

            <p>{title}</p>
        </div>
    )
}

export default SidebarOption
