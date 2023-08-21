import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {Message} from "../../util/Message";
import {getTracks} from "../../util/getTracks";
import {supabase} from "../../util/supabase";
import QRCode from "react-qr-code";

interface Track {
    name: string;
    artist: string;
    albumCover: string;
}

const MusicRoom: React.FC = () => {

    const [link, setLink] = useState('');
    const router = useRouter();
    let messageCounter = 1;
    const {username} = router.query;
    const { asPath } = router;
    const [messages, setMessages] = useState<Message[]>([]);


    const setInitialQueue = async() => {
        const { data: room, error } = await supabase
            .from('rooms')
            .select('queue')
            .eq('username', username)
            .single();

        if (error) {
            throw error;
        }

        let { queue } = room;
        setMessages(queue);
    }
    setInitialQueue();

    const [messageContent, setMessageContent] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [tracks, setTracks] = useState<Track[]>([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const [msgUsername, setUsername] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const handleUsername = async(event: string) => {
        if(!event){
            setUsername('Anonymous');
        }else{
            setUsername(event);
        }
    }

    const updateCurrentTime = () => {
        setCurrentTime(new Date());
    };

    const fetchTracks = async (query: string) => {
        setIsLoading(true);
        const trackData = await getTracks(query);
        setTracks(trackData);
        setIsLoading(false);
    };


    const sendSongRequest = async (messageContent: string) => {
        updateCurrentTime();

        const message: Message = {
            id: messageCounter++,
            content: messageContent,
            timestamp: currentTime.toLocaleTimeString(),
            username: msgUsername,
        };

        const { data: room, error } = await supabase
            .from('rooms')
            .select('*')
            .eq('username', username)
            .single();

        if (error) {
            throw error;
        }

        let { queue } = room;
        messages.push(message);
        queue = messages;

        await supabase
            .from('rooms')
            .update({ queue })
            .eq('username', username)
            .single();


        setMessages(queue);
        setMessageContent('');
        setTracks([]);
    };


    const searchSongRequest = async() =>{
        await fetchTracks(messageContent);
    }

    const [chatLink, setChatLink] = useState('');

    useEffect(() => {
        const link = `${window.location.origin}${asPath}`;
        setChatLink(link);
        setLink(link)
    }, [asPath]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(chatLink);
    };

    const clearQueue = async () => {
        setMessages([]);

        const { error } = await supabase
            .from("rooms")
            .update({ queue: [] })
            .eq("username", username)
            .single();

        if (error) {
            throw error;
        }
    };

    const [qrCode, setQrCode] = useState(false);
    const showQr = () => {
        setQrCode(!qrCode);
    }

    //<button onClick={handleCopyLink}>Share this link: {chatLink}</button>

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h3 className="text-green-500 font-bold text-3xl mb-4 text-center">Host: {username}</h3>
            <div className="flex flex-1 w-full">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-green-500 font-bold text-3xl mb-4">Current Queue:</h1>
                        <button className="btn rounded-full my-8" onClick={clearQueue}>Clear Queue</button>
                        <div className="h-max">
                            {messages.map((message) => (
                                <div key={message.timestamp}>
                                    <h3 className="text-green-500 font-bold text-lg mb-4">
                                        <strong>{message.username}:</strong> {message.content}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                    {!submitted && (
                        <div className="text-center mt-4">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username-input" className="sr-only">
                                    Choose a username
                                </label>
                                <input
                                    type="text"
                                    id="username-input"
                                    placeholder="Choose a username or stay anonymous"
                                    value={msgUsername}
                                    onChange={(e) => handleUsername(e.target.value)}
                                    className="w-64 h-10 px-3 rounded-lg bg-white border-2 border-green-400 text-green-500 outline-none focus:border-green-500 text-center"
                                    disabled={submitted}
                                />
                                <button type="submit" className="btn rounded-full">
                                    {submitted ? 'Submitted' : 'Submit'}
                                </button>
                            </form>
                        </div>
                    )}
                    <div className="text-center">
                        <input
                            type="text"
                            placeholder="Search for Song"
                            value={messageContent}
                            onChange={(e) => setMessageContent(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && searchSongRequest()}
                            className="w-64 h-10 px-3 rounded-lg bg-white border-2 border-green-400 text-green-500 outline-none focus:border-green-500 text-center"
                        />
                        <button onClick={searchSongRequest} className="btn rounded-full">
                            Search
                        </button>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="overflow-scroll">
                                {tracks.map((track, index) => (
                                    <div key={index} className="mb-8 flex flex-row items-center">
                                        <button
                                            onClick={() => {
                                                const message = `${track.name} - ${track.artist}`;
                                                sendSongRequest(message);
                                            }}
                                            className="flex flex-row items-center hover:outline-green-500"
                                        >
                                            <img
                                                src={track.albumCover}
                                                alt={track.name}
                                                className="w-20 h-20 mr-4 rounded-lg object-cover"
                                            />
                                            <div>
                                                <h3 className="text-green-500 font-bold text-lg mb-2">{track.name}</h3>
                                                <p className="text-gray-500 font-bold text-md">{track.artist}</p>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="bottom-0 text-green-500 text-center">
                    {qrCode ? (
                        <div className="flex justify-center items-center">
                            <QRCode value={link} size={148} className="bg-green-500 p-1"/>
                        </div>
                    ) : (
                        <div></div>
                    )}
                <p className="font-semibold">Share this link with your friends!</p>
                <button onClick={handleCopyLink} className="btn rounded-full">
                    Copy Link
                </button>
                <button onClick={showQr} className="btn rounded-full">
                    Show QR Code
                </button>
                <button onClick={() => window.location.href = '/'} className="btn rounded-full">
                    Back Home
                </button>
            </div>
        </div>

    );
};



export default MusicRoom;
