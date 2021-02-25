import React from 'react'
import './login.css'
import { loginUrl } from './spotify'

function Login() {

    return (
        <div className="login">

            <img src="https://swixxzaudio.com/wp-content/uploads/2020/04/listen-on-spotify-3.png" alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
