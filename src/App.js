import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');  // Clear input after adding
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className="flex flex-col items-center w-full max-w-xs">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700 rounded"
        />
        <button
          onClick={handleAddTask}
          className="w-full p-2 mb-4 bg-blue-600 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
      <ul className="w-full max-w-xs">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 p-2 mb-2 rounded"
          >
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="bg-red-600 p-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
