import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import './player.css'
import Footer from './Footer'

function Player({ Spotify }) {
    return (
        <div className="player">
            <div className="playerbody">
                <Sidebar />
                <Body Spotify={Spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Player
