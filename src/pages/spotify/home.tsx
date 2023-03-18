import React from 'react';
import { useState} from "react";
import {getTracks} from "../../util/getTracks";

interface Track {
    name: string;
    artist: string;
    albumCover: string;
}


export default function home(){

    const [tracks, setTracks] = useState<Track[]>([]);
    const [query, setQuery] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    const fetchTracks = async () => {
        setIsLoading(true);
        const trackData = await getTracks(query);
        setTracks(trackData);
        setIsLoading(false);
    };


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };


    return (
        <div className="items-center h-screen">
            <div className=" rounded-b-box rounded-tr-box relative overflow-x-auto">
                <div className="rounded-b-box rounded-tr-box flex min-w-[18rem] flex-col items-center justify-center ">
                    <h1 className="text-green-500 font-bold text-3xl mb-4">Queue-R x Spotify</h1>
                    <div className="mt-10 mb-12">
                        <form onSubmit={(event) => {event.preventDefault(); fetchTracks();}}>
                            <input
                                type="text"
                                placeholder="Search Spotify"
                                value={query}
                                onChange={handleSearchChange}
                                className="w-64 h-10 px-3 rounded-lg bg-white border-2 border-green-400 text-green-500 outline-none focus:border-green-500 text-center"
                            />
                            <button onClick={fetchTracks}
                                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    type="submit"
                            >Search for Tracks</button>
                        </form>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            tracks.map((track, index) => (
                                <div key={index}>
                                    <h3>{track.name}</h3>
                                    <p>{track.artist}</p>
                                    <img src={track.albumCover} alt={track.name} />
                                </div>
                            ))
                        )}
                    </div>

                    <form action='/' className="w-max inline-flex place-self-center">
                        <button
                            className="btn rounded-full my-8"
                        >Back Home!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
