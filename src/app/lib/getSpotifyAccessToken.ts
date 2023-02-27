import React from "react";
import {spotifyWebApi} from "components/app/lib/spotifyClient";

export const getSpotifyAccessToken = async () => {
    const result = await spotifyWebApi.clientCredentialsGrant();
    return result.body.access_token;
}