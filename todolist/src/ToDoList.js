import React, { useState } from 'react';
import './ToDoList.css'; // Import CSS file for styling

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [hideCompleted, setHideCompleted] = useState(false);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleHideCompletedToggle = () => {
    setHideCompleted(!hideCompleted);
  };

  const filteredTasks = hideCompleted ? tasks.filter(task => !task.completed) : tasks;

  return (
    <div className="todo-container"> {/* Container div with CSS class */}
      <div className="todo-list"> {/* Inner div for ToDoList */}
        <h1>To Do List</h1>
        {filteredTasks.length === 0 && <p>Nothing to do...</p>}
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress} // Listen for Enter key press
          placeholder="Add new task..."
        />

        <button onClick={handleAddTask}>Add Task</button>
        <br />
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={handleHideCompletedToggle}
        />
        <label>Hide Completed Tasks</label>
        <ul style={{ listStyleType: 'none' }}> {/* Apply CSS to remove bullets */}
          {filteredTasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
