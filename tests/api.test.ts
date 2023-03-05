import { jest, describe, test, it, expect} from "@jest/globals";
import axios, {AxiosInstance} from 'axios';
import {getTracks} from "../src/pages/spotify/home";

type track = {
    name: string,
    artist: string,
    albumCover: string,
};

jest.mock('axios');

it('return track information (title, artist, album', async() => {
    (axios.get as jest.MockedFunction<AxiosInstance>).mockResolvedValue({
        data : [
            {tracks:
                    {
                        items: [
                            {
                                name: "Wesley's Theory",
                                artists: [
                                    {name: "Kendrick Lamar"}
                                ],
                                album: {
                                    images: [
                                        {url: "Cover for To Pimp a Butterfly"}
                                    ]
                                }
                            }
                        ]
                    }
            }
        ]
    });

    const tracks = await getTracks("Wesley's Theory");
    expect(tracks.name).toEqual("Wesley's Theory");
    expect(tracks.artist).toEqual('Kendrick Lamar');
    expect(tracks.albumCover).toEqual('Cover for To Pimp a Butterfly');

})