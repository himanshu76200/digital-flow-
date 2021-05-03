import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="link">
            <Link to="/login">
                <button className="button">LOGIN</button>
            </Link>
            <Link to="/signup">
                <button className="button">Signup</button>
            </Link>
        </div>
    )
}

export default Home
