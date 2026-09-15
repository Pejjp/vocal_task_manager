import Home from "./Home";
import React, { useState } from 'react';
import '../styles/TaskCreation.css';


function ScriptTaskCreation({onClose,onAddTask,taskCount}){
    const [titleEntered,setTitleEntered] = useState("");
    const [dueDateEntered,setDueDateEntered] = useState("");


    const handleSave = () => {
        const newTask = { no: taskCount+1, title:titleEntered , dueDate:dueDateEntered, status:"Planned"};
        
        onAddTask(newTask);
        onClose();
    };
    
    return (
        <div className="popup-container">
            <div className="popup">
                <div className="head-create-task">
                    <h2 className="big-title">Create a new Task</h2>
                </div>
                <div >
                    <div className="title-box">
                        <h2>Title:</h2>

                        <form >
                            <input type="text"
                                placeholder="Type your task title here"
                                className="title-task-placehoder"
                                value={titleEntered}
                                onChange={(e)=>setTitleEntered(e.target.value)}
                                />
                        </form>
                    </div>

                    <div className="due-date-box">
                        <h2 >Due Date:</h2>
    
                        <form >
                                <input type="date"
                                placeholder="YYYY/MM/DD"
                                className="date-task-placehoder"
                                value={dueDateEntered}
                                onChange={(e)=>setDueDateEntered(e.target.value)}
                                />
                        </form>
                    </div>
                </div>

                <div className="button-row">
                    <button onClick={onClose} className="button-cancel"> Cancel </button>

                    <button disabled = {titleEntered.length === 0 || dueDateEntered.length === 0} 
                            onClick = {handleSave} className="button-save"> Save
                    </button>
                </div>

            </div>
      </div>
    )
}

export default ScriptTaskCreation