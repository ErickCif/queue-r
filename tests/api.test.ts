import { jest, describe, test, it, expect} from "@jest/globals";
import axios, {AxiosInstance} from 'axios';
import {getTracks} from "../src/pages/spotify/home";



export const mockedTrackData: Array<any> = [
    {data : [
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
        ]}
]

const mockGetTracks = jest.fn();
jest.mock('getTracks', () => ({
    get mockedTrackData() {
        return mockGetTracks()
    }
}))



test('return track information (title, artist, album', async() => {
    const tracks = await getTracks("Wesley's Theory");
    expect(tracks.name).toEqual("Wesley's Theory");
    expect(tracks.artist).toEqual('Kendrick Lamar');
    expect(tracks.albumCover).toEqual('Cover for To Pimp a Butterfly');

})