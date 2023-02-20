import React from 'react';
import SpotifyWebApi from "spotify-web-api-node";
import {useState, useEffect} from "react";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type Props = {
    client_id: string;
    secret_id: string;
}

export async function SpotifyConnectComponent(props: Props){

    const client = props.client_id;
    const secret = props.secret_id;
    const api = new SpotifyWebApi({
        clientId: client,
        clientSecret: secret,
       // redirectUri: 'http://localhost:3000/api/auth/callback/spotify'
    });

    const query = "Wesley's Theory";
    const[ song, setSong ] = useState<TrackObjectFull>();
    /*useEffect(() => {
        async function getSong() {
            const token = await api.clientCredentialsGrant();
            api.setAccessToken(token.body.access_token);

            const result = await api.searchTracks(query);
            setSong(result.body.tracks?.items[0]);
        }
        getSong();
    })


    /*const data = await api.clientCredentialsGrant();
    api.setAccessToken(data.body.access_token);


    const result = await api.searchTracks(query);
    const track = result.body.tracks?.items[0];*/
    useEffect(() => {
        async function fetchData() {
            const token = await api.clientCredentialsGrant();
            api.setAccessToken(token.body.access_token);

            const result = await api.searchTracks(query);
            setSong(result.body.tracks?.items[0]);
        }

        fetchData();
    }, []);
    const track = song;

    return(
        <div className="flex-col items-center">
            <h1>{track?.name}</h1>
            <p>{track?.artists[0].name}</p>
            <img src={track?.album.images[0].url} alt="Album Cover"/>
        </div>
    )
}