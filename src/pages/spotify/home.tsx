import React from 'react';
import { useState, useEffect} from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { Login } from "../../components/SpotifyLoginComponent";

type Props = {
    token: string;
};

interface Track {
    name: string;
    artist: string;
    albumCover: string;
}

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

export default function home(props: Props){

    const [tracks, setTracks] = useState<Track[]>([]);
    const [query, setQuery] = useState("");
    const [ searchResults, setSearchResults ] = useState<string[]>([]);
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

    // Test Credentials only, component currently not working
    const client = "2bf2dbe207264086aa7a81be7f9be525";
    const secret = "1832b279215f41d9b4a5520b6facf35c";

    /*
    <button onClick={fetchTracks}>Search for Tracks</button>
                    {tracks.map((track, index) => (
                        <div key={index}>
                            <h3>{track.name}</h3>
                            <p>{track.artist}</p>
                            <img src={track.albumCover} alt={track.name} />
                        </div>
                    ))}
     */

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
                    {searchResults && searchResults.length >> 0? (
                        <div>
                            {searchResults.map((term, index) => (
                                <li key={index}
                                    className="text-green-500 font-bold text-md mb-4"
                                >{term}</li>
                            ))}
                        </div>
                    ): (
                        <div>
                            <p className="text-green-500 font-bold text-md mb-4">Awaiting Search...</p>
                        </div>
                    )}


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

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (context.req.cookies["spotify-token"]) {
        const token: string = context.req.cookies["spotify-token"];
        return {
            props: { token: token },
        };
    } else {
        return {
            props: { token: "" },
        };
    }
};