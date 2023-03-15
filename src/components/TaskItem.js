import { useEffect } from "react";

export const TaskItem = ({
    taskTitle,
    taskDelHandler,
    taskId,
}) => {
    useEffect(() => {
        //works when we create new task or render component
        console.log('Mount');
        return () => {
            // works when we remove task
            console.log('Unmount');
        }
    },[])
    return (
        <li>
            {taskTitle}
            <button onClick={() => taskDelHandler(taskId)}>x</button>
        </li>
    );
};