import {expect, jest, test} from '@jest/globals';
import {spotifyWebApi} from "../src/lib/spotifyClient";

test('spotify client created', () => {
    expect(spotifyWebApi).toBeDefined();
})


