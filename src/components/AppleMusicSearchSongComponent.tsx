import React, {useState, useEffect} from "react";
import '../app/globals.css';

export default function AppleMusicSearchComponent() {

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
        <div className="bg-black text-white">
            <div className="max-w-xl mx-auto p-4">
                <h1 className="font-serif text-4xl font-bold mb-6">Apple Music</h1>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search Apple Music"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        onKeyPress={handleKeyPress}
                        className="bg-black text-white rounded-md py-2 px-4 w-full sm:w-80 mr-2 outline-none border border-white focus:border-blue-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-4 py-2 text-white font-bold"
                    >
                        Search
                    </button>
                </div>
                {searchResults && searchResults.length >> 0? (
                    <div>
                        {searchResults.map((term, index) => (
                            <li key={index}
                                className="text-white-500 font-bold text-md mb-4"
                            >{term}</li>
                        ))}
                    </div>
                ): (
                    <div>
                        <p className="text-white-500 font-bold text-md mb-4">Awaiting Search...</p>
                    </div>
                )}
                <form action='/' className="w-max inline-flex place-self-center">
                    <button
                        className="btn rounded-full"
                    >Back Home!</button>
                </form>
            </div>
        </div>
    );
}