import '../styles/App.css'
import '../styles/TaskCard.css'
import MenuTask from './MenuTask'

function TaskCard({task,onDeleteTask,onModifyTask}){

    function menuClick(){
        alert("clicked")
    }

    const handleDelete = () => {      
        onDeleteTask(task.no);
    };

    const handleModify = () => onModifyTask(task);

 return ( 
    <div className="task-card">
        
        <div className='row'>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="25
                    " stroke="null" strokeWidth="0" fill="orange" />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontWeight="bold"
                        fontSize={20}>
                        {task.no}
                    </text>
                </svg>

            <h3 className="task-title">{task.title}</h3>
        </div>

        <div className="sub-row">
            <h4 className='due-date'>{task.dueDate}</h4>

            <div className='status'>
                <h4 >{task.status}</h4>
                {task.status==="Planned" &&    
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="10"
                     stroke="null" strokeWidth="0" fill="#6631D7" />
                </svg>}
                {task.status==="Pending" &&    
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="10"
                     stroke="null" strokeWidth="0" fill="#FFDC4A" />
                </svg>}
                {task.status==="Done" &&    
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="10"
                     stroke="null" strokeWidth="0" fill="#ADF0C7" />
                </svg>}
            </div>
            <MenuTask onDelete ={handleDelete} onModify={handleModify} task={task} className="menu-task" />
        </div>

{/* 
        <img className="task-menu" src="\src\assets\menu-dots.png" alt="Modifer" onClick={menuClick}/> */}
    </div>
 )   
}

export default TaskCard