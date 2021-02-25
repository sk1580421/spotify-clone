import React from 'react'
import './header.css'
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerContextValue } from './DataLayer'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function Header() {

    const [{ user }, dispatch] = useDataLayerContextValue();


    return (
        <div className="header">
            <div className="headerleftmost">
                <ArrowBackIosIcon className="arrowforward" />
                <ArrowForwardIosIcon className="arrowbackward" />

            </div>
            <div className="headerleft">
                <SearchIcon />
                <input type="text" placeholder="Search for Song, Artisst or Albums" />
            </div>
            <div className="headerright">
                <Avatar src={user?.images[0]?.url} alt=" " />
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header
