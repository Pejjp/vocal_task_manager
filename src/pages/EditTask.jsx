import React, { useState,useEffect } from 'react';
import '../styles/TaskCreation.css';

function EditTask({onClose,onModifyTask,task}){
    const [titleEntered, setTitleEntered] = useState('');
    const [dueDateEntered, setDueDateEntered] = useState('');
    const [statusEntered, setStatusEntered] = useState('');
  
    // Load task data once when popup opens
    useEffect(() => {
      if (task) {
        setTitleEntered(task.title);
        setDueDateEntered(task.dueDate);
        setStatusEntered(task.status);
      }
    }, [task]);
  
    const handleSave = () => {
      const newTask = {
        no: task.no,
        title: titleEntered,
        dueDate: dueDateEntered,
        status: statusEntered,
      };
      onModifyTask(newTask);
      onClose();
    };
   
    return (
        <div className="popup-container">
            <div className="popup">
                <div className="head-create-task">
                    <h2 className="big-title">Modify your Task</h2>
                </div>
                <div >
                    <div className="title-box">
                        <h2 >Title:</h2>

                            <input type="text"
                                placeholder="Type your task title here"
                                className="title-task-placehoder"
                                value={titleEntered}
                                onChange={(e)=>setTitleEntered(e.target.value)}
                                />
                    </div>

                    <div className="due-date-box">
                        <h2 >Due Date:</h2>
    
                                <input type="date"
                                placeholder="YYYY/MM/DD"
                                className="date-task-placehoder"
                                value={dueDateEntered}
                                onChange={(e)=>setDueDateEntered(e.target.value)}
                                />
                    </div>

                    <div className="status-box">
                        <h2 >Status :</h2>
                        <form >
                                <select name="selectStatus"
                                className="status-select"
                                value={statusEntered}
                                onChange={(e)=>setStatusEntered(e.target.value)}
                                >
                                    <option value="Planned">Planned</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Done">Done</option>
                                </select>
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

export default EditTask