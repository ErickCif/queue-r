import {expect, jest, test} from '@jest/globals';
import {spotifyWebApi} from "components/lib/spotifyClient";
import {WebPlayback} from "components/components/WebPlaybackComponent";

test('spotify client created', () => {
    expect(spotifyWebApi).toBeDefined();
})


