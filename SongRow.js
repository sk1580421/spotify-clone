import React from 'react'
import './songrow.css'

function SongRow({ title, desc, img }) {
    return (
        <div className="songrow">

            <div className="song">
                <img src={img} alt="" />
                <div className="songinfo">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="line">
                <hr />
            </div>
        </div>
    )
}

export default SongRow
