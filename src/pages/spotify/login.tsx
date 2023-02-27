import React, {useState} from "react";
import '../../app/globals.css';
import {supabase} from "components/lib/supabaseClient";

const LoginPage = () => {
    const [accessToken, setAccessToken] = useState("");
    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'spotify',
        });

        if (error) {
            console.log(error);
        } else {
            const { provider } = data;
            setAccessToken(provider);
        }
    };
    let message;

    if(accessToken){
        message = "token received!";
    }else{
        message = "token error";
    }

    return (
        <div className="items-center flex-center">
            <h1>Login Page (Check the link after you login)</h1>
            <button
                onClick={handleLogin}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                Login With Spotify!
                (Supabase)
            </button>
            {accessToken ? (
                <div>
                    {message}
                </div>
            ) : (
                <div>
                    {message}
                </div>
            )}
        </div>
    );
};

export default LoginPage;

