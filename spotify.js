export const Authendpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-6af45.web.app/";

const ClientID = "986d4983150f471e939e0e2c76eded1c";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",

];

export const loginUrl = `${Authendpoint}?client_id=${ClientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, []);
}