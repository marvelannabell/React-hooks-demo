import { useEffect } from "react";

export const TaskItem = ({
    taskTitle,
    taskDelHandler,
    taskId,
}) => {
    useEffect(() => {
        console.log('Mount');
        return () => {
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