import React, {useState} from 'react';
import {Routes, useNavigate} from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

export default function HomePageComponent() : JSX.Element{

    const handleClick = (value: number) => {
        if(1){

        }else if(2){

        }

    }

    return(
        <div className="place-content-center mt-12">
            <div>
                <form action='/spotify/spotify-testing/' className="inline-flex">
                    <button
                        className="btn rounded-full"
                        onClick={() => handleClick(1)}
                    >Spotify Testing</button>
                </form>
                <button className="btn rounded-full"
                        onClick={() => handleClick(2)}
                >Apple Music Testing</button>
                <button className="btn rounded-full"
                        onClick={() => handleClick(3)}
                >Supabase Testing</button>
            </div>

        </div>
    )
}