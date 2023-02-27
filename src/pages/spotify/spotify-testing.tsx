import React from 'react';
import { useState, useEffect} from "react";
import SpotifySearchSongComponent from "components/components/SpotifySearchSongComponent";
import LoginPage from "components/pages/spotify/login";
import {getSpotifyAccessToken} from "components/app/lib/getSpotifyAccessToken";
import {spotifyWebApi} from "components/app/lib/spotifyClient";

export default function spotifyTesting(){

    // Test Credentials only, component currently not working
    const client = "2bf2dbe207264086aa7a81be7f9be525";
    const secret = "1832b279215f41d9b4a5520b6facf35c";

    return (
        <div className="items-center">
            <LoginPage/>
            <SpotifySearchSongComponent/>
        </div>
    )
}