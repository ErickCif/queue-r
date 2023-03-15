import {expect, test} from "@jest/globals";
import {getTracks} from "../src/util/getTracks";
import 'whatwg-fetch';

interface Track {
    name: string;
    artist: string;
    albumCover: string;
}


test('Testing search API using NoCode and Spotify', async () => {
    const tracks = await getTracks("Wesley's Theory");
    expect(tracks.name).toEqual("Wesley's Theory");
    expect(tracks.artist).toEqual("Kendrick Lamar");
    expect(tracks.albumCover).toBeDefined();
})