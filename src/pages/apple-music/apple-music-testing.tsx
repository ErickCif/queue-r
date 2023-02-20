import React from "react";
import AppleMusicSearchComponent from "components/components/AppleMusicSearchSongComponent";
import '../../app/globals.css';

export default function appleMusicTesting() : JSX.Element{
    return(
        <div>
            <h1 className="font-serif text-4xl font-bold mb-6 text-center">
                I recently found out the Apple Music API is not free. This part of the tool is on shaky grounds.</h1>
            <AppleMusicSearchComponent/>
        </div>
    )
}