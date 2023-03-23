import React, {useState} from 'react';
import { useRouter } from 'next/router';

export default function getLink(){
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState();

    const handleGetLink = async() => {
        const response = await fetch('/api/create-room');
        const data = await response.json();
        const roomId = data.roomId;
        setRoom(roomId);
        router.push(`/room/${room}?username=${username}`);
    }

    /*
    * <div>
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-64 h-10 px-3 rounded-lg bg-white border-2 border-green-400 text-green-500 outline-none focus:border-green-500 text-center"
                />
                    <button
                        className="btn rounded-full" name='Get Link' disabled={!username} onSubmit={handleGetLink}
                    >Get Room Link</button>

            </div>
    * */


    return(
        <div className="flex flex-col items-center justify-center h-screen">

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

            <form action="/" className="w-max inline-flex mt-8">
                <button className="btn rounded-full">Back Home!</button>
            </form>

        </div>

    )
}