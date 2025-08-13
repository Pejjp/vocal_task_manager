import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import '../styles/TaskCard.css'
import TaskCard from '../components/TaskCard'
import VocalTaskCreation from './VocalTaskCreation'
import ScriptTaskCreation from './ScriptTaskCreation'
import EditTask from '../pages/EditTask';


function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isScriptCreatOpen, setIsScriptOpen] = useState(false);
  const [taskArray,setTaskArray] = useState([])
  const [taskNum,setTaskNum] = useState(0)
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

const handleEditTask = (task) => {
  setTaskToEdit(task);
  setIsEditOpen(true);
};

const handleSaveEditedTask = (updatedTask) => {
  setTaskArray((prevTasks) =>
    prevTasks.map((task) =>
      task.no === updatedTask.no ? updatedTask : task
    )
  );
  setIsEditOpen(false);
};

  useEffect(() => {
    const storedTasks = localStorage.getItem('taskArray');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTaskArray(parsedTasks);
      setTaskNum(parsedTasks.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
  }, [taskArray]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openPopupScript = () => {
    setIsScriptOpen(true);
  };

  const closeScriptOpen = () => {
    setIsScriptOpen(false);
  };

  const handleAddTask = (newTask) =>{
    setTaskNum((prevCount)=>prevCount+1);
    setTaskArray((prevTasks)=>[...prevTasks,newTask]);
  };

  const handleDeleteTask = (no) =>{
    setTaskNum((prevCount)=>prevCount-1);

    setTaskArray((prevTasks)=>prevTasks
                  .filter(task => task.no !== no)
                  .map((task)=>
                    task.no >no
                    ?{...task, no:task.no-1}
                    :task
                    
    ));
  };

  const handleModifyTask = (modifiedTask) => {
    const modifiedTaskArray = taskArray.map((task) => 
        task.no === modifiedTask.no ?
       {no:task.no,title:modifiedTask.title,dueDate:modifiedTask.dueDate,status:modifiedTask.status}:task
      
    );
    setTaskArray(modifiedTaskArray);
  }


  return (
    <>
      <div className='topHome'>
        <h2 className='homeTitle'> Add new Task</h2>
        <div className='top-buttons'>
            <div>
              <button className='button' onClick={openPopup} title=''>
                  <img src='\src\assets\microphone.png' className='imgTop'/>
                  
              </button>
              {isPopupOpen && <VocalTaskCreation onClose={closePopup} />}
              <h3>Vocal</h3>
            </div>

            <div>
              <button className='button' onClick={openPopupScript}>
                  <img src='\src\assets\keyboard.png' className='imgTop'/>
              </button>
              {isScriptCreatOpen && <ScriptTaskCreation
                                      onClose={closeScriptOpen} 
                                      onAddTask={handleAddTask}
                                      taskCount = {taskArray.length} />}

              <h3>Writte</h3>
            </div>

        </div>
      </div>

    <div className='space'/>

    <div className='col'>
        <div className='title'>
            Tasks 
        </div>

        <div className='menu'>
            <div className='title-menu'>
                Title
            </div>
            
            <div className='menu-right'>
                <div className='due-date'>Due Date</div>
                <div className='status'>Status</div>
            </div>

        </div>
        {taskArray.length==0 && <h2>No tasks Found</h2>}

        <div className='task-grig'>
            {taskArray.map((task,index) => <TaskCard task={task} key={index} 
                                                onDeleteTask ={handleDeleteTask}
                                                onModifyTask={handleEditTask}/> )}
        </div>
        {isEditOpen && taskToEdit &&(
              <EditTask
                task={taskToEdit}
                onModifyTask={handleSaveEditedTask}
                onClose={() => setIsEditOpen(false)}
              />
            )}
    </div>

    </>
  )
}

export default Home