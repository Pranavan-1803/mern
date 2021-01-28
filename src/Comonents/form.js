import React from 'react';
import './form.css';

const form = () => {
    return (
        <div className="container">
            <h1 className="title">Register user</h1>
            <form>
                <label>Name:</label>
                <input required type="text" id="username" name="username"></input>
                <br></br>
                <label>Email:</label>
                <input required type="email" id="userEmail" name="userEmail"></input>
                <br/>
                <button type="submit">Register</button>
            </form>
            
        </div>
    )
}

export default form;
