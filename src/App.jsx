import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTodos ([...todos, task]);
      setTask(''); 
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a new task" 
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;