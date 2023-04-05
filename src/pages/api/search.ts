import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 *
 * @param req - Contains {search: string}, the term that is used to query the Spotify API
 * @param res - Returns the search results from Spotify in pages containing five results each
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {search} = req.query;
    try {
        const response = await axios.get(
            'https://v1.nocodeapi.com/sazu/spotify/uFrORvYTgncfJPit/search\n',
            {
                params: {
                    q:  search,
                    type: 'track',
                    perPage: 5,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
