import React from 'react';
import './Home.css';

const home = () => {
    return (
        <div className="container">
            <h1 className="title">All users</h1>
            <ul className="Users">
                <li>
                    <b>Name:</b> John / <b>Email:</b> john@gmail.com
                </li>
                <li>
                <b>Name:</b> Nick / <b>Email:</b> nick@gmail.com
                </li>
            </ul>
        </div>
    )
}

export default home
