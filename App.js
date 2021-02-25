import react, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerContextValue } from './DataLayer'

const Spotify = new SpotifyWebApi();

console.log(Spotify)

function App() {


  const [{ user, token }, dispatch] = useDataLayerContextValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    // window.location.hash = "";
    const token_1 = hash.access_token;

    if (token_1) {
      dispatch({
        type: "settoken",
        token: token_1,
      });



      Spotify.getUserPlaylists().then((playlists) => {
        dispatch({

          type: "setplaylists",
          playlists: playlists,
        })
      });

      Spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then(response =>
        dispatch({
          type: "setdiscoverweekly",
          discover_weekly: response,

        })


      );



      Spotify.setAccessToken(token_1)
      Spotify.getMe().then((user) => {
        console.log(user)
        dispatch({
          type: "setuser",
          user: user,
        })
      })
    }





  }, []);

  console.log(user)


  return (
    <div className="app">
      { token ? <Player Spotify={Spotify} /> : (<Login />)}
    </div>
  );
}

export default App;
