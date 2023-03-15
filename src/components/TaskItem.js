export const TaskItem = ({ 
    taskTitle,
    taskDelHandler,
    taskId,
 }) => {
    return (
        <li>
            {taskTitle}
            <button onClick={()=>taskDelHandler(taskId)}>x</button>
            </li>
    );
};