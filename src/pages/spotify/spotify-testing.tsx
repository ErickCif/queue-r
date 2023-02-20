import React from 'react';
import {SpotifyConnectComponent} from "components/components/SpotifyConnectComponent";
import { useState, useEffect} from "react";
import SpotifySearchSongComponent from "components/components/SpotifySearchSongComponent";

export default function spotifyTesting(){

    // Test Credentials only, component currently not working
    /*const client = "2bf2dbe207264086aa7a81be7f9be525";
    const secret = "1832b279215f41d9b4a5520b6facf35c";

    const props = {
        client_id: client,
        secret_id: secret,
    }

    //const spotifyConnect = await SpotifyConnectComponent(props);

    const [ spotifyConnect, setSpotifyConnect ] = useState<React.ReactNode>(null);
    useEffect(() => {
        async function getSpotifyConnect(){
            const output = await SpotifyConnectComponent(props);
            setSpotifyConnect(output);
        }
        getSpotifyConnect()
    }, []);*/



    return (
        <div className="items-center">
            <SpotifySearchSongComponent/>
            <div className="items-center content-center">
            </div>
        </div>
    )
}