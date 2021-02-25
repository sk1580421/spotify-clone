import React from 'react';
import './body.css'
import Header from './Header'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDataLayerContextValue } from './DataLayer'
import SongRow from './SongRow'

function Body({ Spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerContextValue();

    return (
        <div className="body">
            <Header Spotify={Spotify} />
            <div className="bodyinfo">

                <div className="bodybanner">
                    <img src="https://i.pinimg.com/474x/ab/ee/ce/abeecee4d179e06f29f343fe43969ba1.jpg" alt="" />

                </div>
                <div className="bodydesc">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>
                </div>
            </div>

            <div className="bodysong">
                <div className="bodyicons">
                    <PlayCircleFilledWhiteIcon className="playbutton" />
                    <FavoriteIcon className="heart" />
                    <MoreHorizIcon className="dots" />

                </div>
            </div>
            <hr />
            <div className="songlists">
                <div className="songlist">
                    <SongRow img="https://ih1.redbubble.net/image.906344356.0135/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" title="DMX trip" desc="this is a popular song..." />
                    <SongRow img="https://cdn.shopify.com/s/files/1/0013/2874/2466/products/dmx-slippin-album-promo-poster-20-x-30_621_677x.jpg?v=1582973461" title="All you know about" desc="this is a popular song of the year..." />
                    <SongRow img="https://i.pinimg.com/originals/c8/1c/4d/c81c4d985989819412e778394346c1d8.jpg" title="Band bros" desc="this is a trending song of this week..." />
                </div>

            </div>

        </div>
    )
}

export default Body
