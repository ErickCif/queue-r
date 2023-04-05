/**
 *
 * @param query - Search term that is passed to search.ts in the API calls
 * @returns {trackData} - The first few results of searching on Spotify for the queried search term
 * @type {(query: string) => (trackData: (name: string, artist: string, albumCover: string))}
 */
export const getTracks = async(query: string) => {
    const response = await fetch(`/api/search?search=${encodeURIComponent(query)}`);
    const data = await response.json();
    const trackData = data.tracks.items.map((track: any) => ({
        name: track.name,
        artist: track.artists[0].name,
        albumCover: track.album.images[0].url,
    }));
    return trackData;
}