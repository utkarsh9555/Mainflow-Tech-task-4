import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => handleCompleteTask(index)}>{task.text}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
