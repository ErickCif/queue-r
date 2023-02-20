import React from 'react';
import {SpotifyConnectComponent} from "components/components/SpotifyConnectComponent";
import { useState, useEffect} from "react";

export default function spotifyTesting(){

    const client = "2bf2dbe207264086aa7a81be7f9be525";
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
    }, []);

    return (
        <div>
            {spotifyConnect}
        </div>
    )
}