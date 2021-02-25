import React from 'react'
import './footer.css'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import LoopIcon from '@material-ui/icons/Loop';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from "@material-ui/core";


function Footer() {
    return (
        <div className="footer">
            <div className="footerleft">
                <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/142017806/original/f8bcb68412e3ce126ab058d222b190e66d630979/create-an-amazing-album-cover-art.png" alt="" />
                <div className="songinfo">
                    <h4>Album</h4>
                    <p>Vancouver sleep...</p>

                </div>
            </div>
            <div>

                <div className="footercentre">
                    <ShuffleIcon className="footericon" />
                    <SkipPreviousIcon className="footericon" />
                    <PlayCircleOutlineIcon className="footericon" fontSize="Large" />
                    <SkipNextIcon className="footericon" />
                    < LoopIcon className="footericon" />
                </div>
                <div className="belowcenter">
                    <p>0.00</p>
                    <Grid item s className="slider_center">
                        <Slider />
                    </Grid>
                    <p>4.32</p>

                </div>
            </div>


            <div className="footerright">

                <Grid className="que">
                    <QueueMusicIcon />
                </Grid>
                <div className="volumedown">
                    <VolumeDownIcon />
                </div>
                <Grid item xs className="slider">
                    <Slider />
                </Grid>

            </div>
        </div>
    )
}

export default Footer
