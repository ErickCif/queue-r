import React from 'react';
import { useState, useEffect} from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { Login } from "../../components/SpotifyLoginComponent";
import {WebPlayback} from "components/components/WebPlaybackComponent";

type Props = {
    token: string;
};

export default function home(props: Props){

    const [query, setQuery] = useState("");
    const [ searchResults, setSearchResults ] = useState<string[]>([]);

    const handleSearch = () => {
        setSearchResults([query]);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    // Test Credentials only, component currently not working
    const client = "2bf2dbe207264086aa7a81be7f9be525";
    const secret = "1832b279215f41d9b4a5520b6facf35c";

    return (
        <div className="items-center h-screen">
            <div className=" rounded-b-box rounded-tr-box relative overflow-x-auto">
                <div className="rounded-b-box rounded-tr-box flex min-w-[18rem] flex-col items-center justify-center ">
                    <h1 className="text-green-500 font-bold text-3xl mb-4">Queue-R x Spotify</h1>
                    <div className="mt-10 mb-12">
                        <input
                            type="text"
                            placeholder="Search Spotify"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-64 h-10 px-3 rounded-lg bg-white border-2 border-green-400 text-green-500 outline-none focus:border-green-500 text-center"
                        />
                        <button
                            onClick={handleSearch}
                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Search
                        </button>
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

                    {props.token === "" ? <Login /> : <WebPlayback token={props.token} />}

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