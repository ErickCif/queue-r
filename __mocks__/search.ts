
export default async function search(query: string) {
    return {
        tracks: {
            items: [
                {
                    name: 'Mocked Track 1',
                    artists: [{ name: 'Mocked Artist 1' }],
                    album: { images: [{ url: 'https://mocked-album-cover-1.jpg' }] },
                },
                {
                    name: 'Mocked Track 2',
                    artists: [{ name: 'Mocked Artist 2' }],
                    album: { images: [{ url: 'https://mocked-album-cover-2.jpg' }] },
                },
            ],
        },
    };
}
