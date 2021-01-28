import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';


const nav = () => {
    return (
        <nav>
            <h2>Mern</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default nav;
