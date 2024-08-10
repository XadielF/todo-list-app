import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskListTemp';
import Modal from './components/Modal';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [expandedTask, setExpandedTask] = useState(null);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900' : 'bg-white';
  }, [darkMode]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, id: Date.now(), isDeleting: false }]);
      setInputValue('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDeleting: true } : task
    ));

    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== id));
      setShowDelete(true);
      setTimeout(() => setShowDelete(false), 2000);
    }, 500); // Match this duration with the CSS animation time
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleExpandTask = (task) => {
    setExpandedTask(task);
  };

  const closeModal = () => {
    setExpandedTask(null);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} flex flex-col items-center justify-center p-4 relative`}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />

      {showSuccess && (
        <div className="absolute top-4 text-center text-green-500 success-message">
          Task Successfully Added!
        </div>
      )}

      {showDelete && (
        <div className="absolute top-4 text-center text-red-500 delete-message">
          Task Deleted!
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
          className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} w-full p-2 mb-4 rounded hover:bg-blue-700 transition-transform transform active:scale-95`}
        >
          Add Task
        </button>
      </div>

      <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleExpandTask={handleExpandTask}
        darkMode={darkMode}
      />

      {expandedTask && (
        <Modal expandedTask={expandedTask} closeModal={closeModal} darkMode={darkMode} />
      )}
    </div>
  );
}

export default App;
