import {expect, jest, test} from '@jest/globals';
import {spotifyWebApi} from "../src/lib/spotifyClient";
import {WebPlayback} from "../src/components/WebPlaybackComponent";

test('spotify client created', () => {
    expect(spotifyWebApi).toBeDefined();
})


