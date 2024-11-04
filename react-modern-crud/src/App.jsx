
import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';


import Todo from "./assets/direct-hit.png";
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
import { useState } from 'react';

const App = () => {
  const [tasks,setTasks] = useState([]);
  const handleTasks = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn title="To do" icon={Todo} status="todo" tasks={tasks} handleTasks={handleTasks}/>
        <TaskColumn title="Doing" icon={doingIcon} status="doing" tasks={tasks} handleTasks={handleTasks}/>
        <TaskColumn title="Done" icon={doneIcon} status="done" tasks={tasks} handleTasks={handleTasks}/>
      </main>
    </div>
  )
}

export default App