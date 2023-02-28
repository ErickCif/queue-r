import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type SpotifyTrackSearchResponse = {
    album: {
        images: [{
            url: string;
        }]
        name: string;
    }
    artists: {
        images: [{
            url: string;
        }]
        name: string;
    }
    name: string;
}

const search = async (req: NextApiRequest, res: NextApiResponse, query: string) => {

}