


import { TaskList } from './components/TaskList';
import styles from './App.module.css'
import { CreateTask } from './components/CreateTask';
// import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { useApi } from './hooks/useApi'

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
  const [allTasks, setAllTasks, isLoading] = useFetch(`http://localhost:3030/jsonstore/todos`, []);
  const { delTodo } = useApi()

  //is this handler function
  const addNewTaskHandler = (newTask) => {
    setAllTasks(state => [
      ...state,
      {
        _id: state[state.length - 1]?._id + 1 || 1,
        taskTitle: newTask,
      }]);
  };

  const taskDelHandler = async (taskId) => {
    // I. use await
    // 1.Delete item from server
    const deletedTodo = await delTodo(taskId)

    // 2.Delete item from state
    setAllTasks(state => state.filter(x => x._id !== taskId))

    // II.Use promise/then

    // // 1.Delete item from server
    // delTodo(taskId)
    //   .then(() => {
    //     // 2.Delete item from state
    //     setAllTasks(state => state.filter(x => x._id !== taskId))
    //   })

    // // 1.Delete item from server
    // delTodo(taskId)
    //   .then(result => {
    //     // 2.Delete item from state
    //     setAllTasks(state => state.filter(x => x._id !== taskId))
    //   })
  }

  return (
    <div className={styles['site-wrapper']}>
      <header>
        <h1>ToDo App</h1>
      </header>

      <main>

        {isLoading ?
          <p>Loading...</p> :
          <TaskList
            allTasks={allTasks}
            taskDelHandler={taskDelHandler}
          />}

        <CreateTask addNewTaskHandler={addNewTaskHandler} />
      </main>
    </div>

  );
}

export default App;
