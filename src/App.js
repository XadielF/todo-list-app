import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaCheckCircle } from 'react-icons/fa';  // Import FaCheckCircle
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900' : 'bg-white';
  }, [darkMode]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');  
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} flex flex-col items-center justify-center p-4 relative`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 text-2xl focus:outline-none"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Success Message */}
      {showSuccess && (
        <div className="absolute top-4 text-center text-green-500 success-message">
          <FaCheckCircle className="inline mr-2" />
          Task Successfully Added!
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className="flex flex-col items-center w-full max-w-xs">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className={`${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-200 text-black border-gray-300'} w-full p-2 mb-4 border rounded`}
        />
        <button
          onClick={handleAddTask}
          className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} w-full p-2 mb-4 rounded hover:bg-blue-700`}
        >
          Add Task
        </button>
      </div>
      <ul className="w-full max-w-xs">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} p-2 mb-2 rounded`}
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
