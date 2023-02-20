import React from "react";
import '../app/globals.css';


export default function SupabaseSignupComponent() : JSX.Element{
    return (
        <div>
            <h1 className="font-serif text-4xl font-bold mb-6">Under Construction...</h1>
            <form action='/supabase/login' className="w-max inline-flex place-self-center">
                <button
                    className="btn rounded-full"
                >Try Spotify Login!</button>
            </form>
            <form action='/' className="w-max inline-flex place-self-center">
                <button
                    className="btn rounded-full"
                >Back Home!</button>
            </form>
        </div>
    )
}