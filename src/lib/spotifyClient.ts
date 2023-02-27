import SpotifyWebApi from "spotify-web-api-node";

export const spotifyWebApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
})

const getSpotifyAccessToken = async () => {
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });

    return response.json();
}

export const searchResult = async () => {
    const { access_token } = await getSpotifyAccessToken();

    return fetch("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
}