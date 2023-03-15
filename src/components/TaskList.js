import { TaskItem } from "./TaskItem";

export const TaskList = ({
    allTasks,
}) => {
    return (
        <ul>
          {allTasks.map(x=><TaskItem key={x._id} taskTitle={x.taskTitle}/>)  }
          
        </ul>
    );
};