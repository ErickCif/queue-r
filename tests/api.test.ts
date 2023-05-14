import { getTracks } from '../src/util/getTracks';
import fetchMock from 'jest-fetch-mock';
import {supabase} from "../src/util/supabase";

beforeEach(() => {
    fetchMock.resetMocks();
});

global.fetch = fetchMock;

describe('getTracks', () => {
    it('returns an empty array when no tracks are found', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ tracks: { items: [] } }));
        const tracks = await getTracks('query');
        expect(tracks).toEqual([]);
    });

    it('returns the expected data when tracks are found', async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify({
                tracks: {
                    items: [
                        {
                            name: 'Track 1',
                            artists: [{ name: 'Artist 1' }],
                            album: { images: [{ url: 'https://album-cover-1.jpg' }] },
                        },
                        {
                            name: 'Track 2',
                            artists: [{ name: 'Artist 2' }],
                            album: { images: [{ url: 'https://album-cover-2.jpg' }] },
                        },
                    ],
                },
            })
        );
        const tracks = await getTracks('query');
        expect(tracks).toEqual([
            {
                name: 'Track 1',
                artist: 'Artist 1',
                albumCover: 'https://album-cover-1.jpg',
            },
            {
                name: 'Track 2',
                artist: 'Artist 2',
                albumCover: 'https://album-cover-2.jpg',
            },
        ]);
    });
});

