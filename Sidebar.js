import React from 'react'
import './sidebar.css'

import SidebarOption from './SidebarOption'
import SidebarOpt from './SidebarOpt'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerContextValue } from './DataLayer'
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';


function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerContextValue();

    // console.log(playlists.values)

    return (
        <div className="sidebar">
            <img
                className="sidebarlogo"
                src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebarplaylists">PLAYLISTS</strong>
            <SidebarOpt Icon={AddBoxIcon} title="Create Playlists" />
            <SidebarOpt Icon={FavoriteIcon} title="Liked Songs" />

            <hr />

            {playlists?.items?.map((playlist) =>
                (<SidebarOption title={playlist.name} />)
            )}

            <SidebarOpt title="English Songs" />
            <SidebarOpt title="Hindi Songs" />
            <SidebarOpt title="My Fav Songs" />
            <SidebarOpt title="Pop Songs" />





        </div>
    )
}

export default Sidebar
