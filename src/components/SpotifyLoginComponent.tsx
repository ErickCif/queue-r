import { VFC } from "react";
import Link from "next/link";

export const Login: VFC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Link href="/api/login">
                    <p className="btn-spotify">Login with Spotify</p>
                </Link>
            </header>
        </div>
    );
};