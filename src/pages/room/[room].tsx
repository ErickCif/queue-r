import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {Message} from "../../util/Message";

const ChatRoom: React.FC = () => {
    const router = useRouter();
    const { roomId } = router.query;
    const username = router.query.username as string;
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageContent, setMessageContent] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());

    const updateCurrentTime = () => {
        setCurrentTime(new Date());
    };

    const sendSongRequest = async() => {
        updateCurrentTime();
        const message: Message = {id: "1", content: messageContent, timestamp: currentTime.toLocaleTimeString(), username: "Test"}
        messages.push(message);
    }

    return (
        <div className="flex flex-row h-screen">

            <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-green-500 font-bold text-3xl mb-4"> Current Queue: </h1>
                    {messages.map((message) => (
                        <div key={message.timestamp}>
                            <h3 className="text-green-500 font-bold text-lg mb-4"><strong>{message.username}:</strong> {message.content}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <input
                        type="text"
                        placeholder="Search for Song"
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendSongRequest()}
                        className="w-64 h-10 px-3 rounded-lg bg-white border-2 border-green-400 text-green-500 outline-none focus:border-green-500 text-center"
                    />
                    <button onClick={sendSongRequest} className="btn rounded-full">Send</button>
                </div>
            </div>

        </div>


    );
};



    export default ChatRoom;
