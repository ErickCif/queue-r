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