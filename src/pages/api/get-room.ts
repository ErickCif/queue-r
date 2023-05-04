// Generate a function for an API route that takes in a username and returns a random id to use as a unique room id.
//@ts-ignore
import type {NextApiRequest, NextApiResponse} from 'next';
import {supabase} from "../../util/supabase";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {username} = req.query;
        const id = Math.random().toString(36).substr(2, 9);
        res.status(200).json({id});

        const { data: existingLinks, error: selectError } = await supabase
            .from('rooms')
            .select('link')
            .eq('username', username);

        if (selectError) {
            throw selectError;
        }

        if (existingLinks?.length) {
            const { link } = existingLinks[0];
            res.status(200).json({ id: link });
            return;
        }

        const { error } = await supabase
            .from('rooms')
            .insert([{ username: username, link: id }]);

        if (error) {
            throw error;
        }

        res.status(200).json({ id });

        /*const {data} = await supabase
            .from('rooms')
            .insert([{username: username, link: id}]);*/

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}