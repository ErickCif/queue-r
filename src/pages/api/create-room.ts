import type {NextApiRequest, NextApiResponse} from 'next';
import {StreamChat} from "stream-chat";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    /*const roomId = uuidv4();
    res.status(200).json({ roomId });*/
    try{
        let token;
        const {userID} = req.query
        const apiKey = process.env.STREAM_CHAT_API_KEY as string;
        const apiSecret = process.env.STREAM_CHAT_API_SECRET;
        const chatClient = new StreamChat(apiKey, apiSecret);
        if (typeof userID === "string") {
            token = chatClient.createToken(userID);
        }
        res.status(200).json({token});
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}
