import React from 'react';
import {SpotifyConnectComponent} from "components/components/SpotifyConnectComponent";

export default function spotifyTesting() : JSX.Element {
    return(
        <div>
            <SpotifyConnectComponent
                client_id={"2bf2dbe207264086aa7a81be7f9be525"}
                secret_id={"1832b279215f41d9b4a5520b6facf35c"}/>
        </div>
    )
}