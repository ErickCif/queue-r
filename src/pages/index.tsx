import React, {useState} from "react";
import {useRouter} from "next/router";


export default function Home() {

    const router = useRouter();
    const [username, setUsername] = useState<string>('');

    /**
     * @description - calls the create-room API call using the provided username to generate a room and redirects
     * the user there
     */
    const handleGetLink = async() => {
        setUsername(username);
        const response = await fetch(`/api/get-room?username=${encodeURIComponent(username)}`);
        const data = await response.json();
        const id = data.id;
        router.push(`/room/id=${id}?username=${username}`);
    }

    return (
        <div className="text-xl text-center h-screen">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-green-500 text-3xl font-bold mb-12 ">QueueR</h1>
                <div className="text-center">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-64 h-10 px-3 rounded-lg bg-white border-2 border-green-400 text-green-500 outline-none focus:border-green-500 text-center"
                    />
                    <button
                        onClick={handleGetLink}
                        disabled={!username}
                        className={`btn rounded-full ${username ? 'bg-green-400 hover:bg-green-500 text-white' : 'bg-gray-300'}`}
                    >
                        Create room
                    </button>
                </div>
            </div>
        </div>
    )
}