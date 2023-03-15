import { TaskItem } from "./TaskItem";

export const TaskList = ({
    allTasks,
    taskDelHandler,
}) => {
    return (
        <ul>
            {allTasks.map(x =>
                <TaskItem
                    key={x._id}
                    taskTitle={x.taskTitle}
                    taskDelHandler={taskDelHandler}
                    taskId={x._id}
                />
            )}

        </ul>
    );
};