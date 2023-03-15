
import './App.css';
import { TaskList } from './components/TaskList';
import styles from './App.module.css'
import { CreateTask } from './components/CreateTask';

function App() {
  return (
    <div className={styles['site-wrapper']}>
      <header>
        <h1>ToDo App</h1>
      </header>
      <main>
        <TaskList />
        <CreateTask />
      </main>
    </div>

  );
}

export default App;
