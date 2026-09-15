import Home from "./Home";
import React from 'react';
import '../styles/TaskCreation.css';

function VocalTaskCreation({onClose}){
    
    return (
        <div className="popup-container">
            <div className="popup">
                <h2 className="big-title">Create a new Task</h2>
                <div className="title-box">
                    <h2>Title:</h2>
                    <button className="button-speak">
                        <img src="src\assets\microphone.png" title="microphone" className="mic"></img>
                    </button>
                </div>
                <button onClick = {onClose} className="button-add">Add</button>
            </div>
      </div>
    )
}

export default VocalTaskCreation