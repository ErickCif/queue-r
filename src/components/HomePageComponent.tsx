import React from 'react';

export default function HomePageComponent() : JSX.Element{

    const handleSubmitSpotify = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.location.href = '/spotify/home/';
    };

    const handleSubmitRooms = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.location.href = '/rooms/get-link/';
    };


    return(
        <div className="place-content-center mt-12 text-white">
            <div>
                <form onSubmit={handleSubmitSpotify} className="inline-flex">
                    <button
                        className="btn rounded-full" name='Spotify Testing'
                    >Spotify Testing</button>
                </form>
                <form onSubmit={handleSubmitRooms} className="inline-flex">
                    <button
                        className="btn rounded-full" name='Room Testing'
                    >Room Testing</button>
                </form>
            </div>

        </div>
    )
}