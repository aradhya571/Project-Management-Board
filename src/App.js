import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/addTask';
import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete header', status: 'done' },
    { id: 2, text: 'Report', status: 'in progress' },
    { id: 3, text: 'Submission of certificate', status: 'to do' },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'hsla(120, 20%, 45%, 1)', // Light grayish-blue background
        backgroundImage: `
          radial-gradient(at 16% 13%, hsla(200, 70%, 80%, 0.8) 0px, transparent 50%),
          radial-gradient(at 27% 10%, hsla(160, 60%, 75%, 0.6) 0px, transparent 50%),
          radial-gradient(at 38% 67%, hsla(180, 50%, 70%, 0.5) 0px, transparent 50%)
        `,
      }}
    >
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />

        {showAddTask && <AddTask onAdd={addTask} />}

        <div className="lanes">
          <div className="lane-column">
            <div className="lane" id="to-do">
              <h2>To-Do</h2>
              {tasks.filter((task) => task.status === 'to do').length > 0 ? (
                <Tasks tasks={tasks.filter((task) => task.status === 'to do')} onDelete={deleteTask} />
              ) : (
                <p>No tasks to Do</p>
              )}
            </div>
            <div className="lane" id="in-progress">
              <h2>In Progress</h2>
              {tasks.filter((task) => task.status === 'in progress').length > 0 ? (
                <Tasks tasks={tasks.filter((task) => task.status === 'in progress')} onDelete={deleteTask} />
              ) : (
                <p>No tasks in Progress</p>
              )}
            </div>
          </div>
          <div className="lane-column">
            <div className="lane" id="review">
              <h2>Review</h2>
              {tasks.filter((task) => task.status === 'review').length > 0 ? (
                <Tasks tasks={tasks.filter((task) => task.status === 'review')} onDelete={deleteTask} />
              ) : (
                <p>No tasks for Review</p>
              )}
            </div>
            <div className="lane" id="done">
              <h2>Done</h2>
              {tasks.filter((task) => task.status === 'done').length > 0 ? (
                <Tasks tasks={tasks.filter((task) => task.status === 'done')} onDelete={deleteTask} />
              ) : (
                <p>No tasks Done</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
