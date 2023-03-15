


import { TaskList } from './components/TaskList';
import styles from './App.module.css'
import { CreateTask } from './components/CreateTask';
// import { useState, useEffect } from 'react';
import { useFetch} from './hooks/useFetch';

function App() {

  // const [allTasks,setAllTasks]=useState([]);
  // //   {_id:1, taskTitle:'first'},
  // //   {_id:2,taskTitle:'second'},
  // //   {_id:3,taskTitle:'third'},
  // // ]);

  // useEffect(()=>{
  //   fetch('http://localhost:3030/jsonstore/todos')
  //   .then(res=>res.json())
  //   .then(result=>{
  //     setAllTasks(Object.values(result))
  //   })
  // },[]);
  const [allTasks,setAllTasks] = useFetch(`http://localhost:3030/jsonstore/todos`, [])

  //is this handler function
  const addNewTaskHandler = (newTask) => {
    setAllTasks(state => [
      ...state,
      {
        _id: state[state.length - 1]?._id + 1 || 1,
        taskTitle: newTask,
      }]);
  };

  const taskDelHandler = (taskId) => {
    setAllTasks(state => state.filter(x => x._id !== taskId))
  }

  return (
    <div className={styles['site-wrapper']}>
      <header>
        <h1>ToDo App</h1>
      </header>
      <main>
        <TaskList
          allTasks={allTasks}
          taskDelHandler={taskDelHandler} />
        <CreateTask addNewTaskHandler={addNewTaskHandler} />
      </main>
    </div>

  );
}

export default App;
