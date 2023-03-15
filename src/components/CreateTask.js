import { useState } from 'react'
export const CreateTask = () => {

    const [task, setTask] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(task);
        setTask('')
    }

    const onChangeTask=(e)=>{
       
        setTask(e.target.value)
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <input 
            type="text" 
            name="taskName" 
            placeholder="do dishes"
            value={task}
            onChange={onChangeTask} />
            <input type="submit" value="Add" />
        </form>
    )
}