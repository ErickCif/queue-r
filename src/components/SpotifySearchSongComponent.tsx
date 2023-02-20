import React, {useState, useEffect} from "react";
import '../app/globals.css';
export default function SpotifySearchSongComponent(): JSX.Element {

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

    return (
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
                        className="w-64 h-10 px-3 rounded-lg bg-white border-2 border-green-400 outline-none focus:border-green-500 text-center"
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
                <form action='/' className="w-max inline-flex place-self-center">
                    <button
                        className="btn rounded-full"
                    >Back Home!</button>
                </form>
            </div>
        </div>

    )
}