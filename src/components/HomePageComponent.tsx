import React, {useState} from 'react';
import {Routes, useNavigate} from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

export default function HomePageComponent() : JSX.Element{


    return(
        <div className="place-content-center mt-12">
            <div>
                <form action='/spotify/spotify-testing/' className="inline-flex">
                    <button
                        className="btn rounded-full"
                    >Spotify Testing</button>
                </form>
                <form action='/apple-music/apple-music-testing/' className="inline-flex">
                    <button
                        className="btn rounded-full"
                    >Apple Music Testing</button>
                </form>
                <form action='/supabase/sb-testing/' className="inline-flex">
                    <button
                        className="btn rounded-full"
                    >Supabase Testing</button>
                </form>

            </div>

        </div>
    )
}