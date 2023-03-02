import React, { VFC } from "react";
import Link from "next/link";

export const Login: VFC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <form action='/api/login' className="w-max inline-flex place-self-center">
                    <button
                        className="btn text-white rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >Login With Spotify</button>
                </form>
            </header>
        </div>
    );
};