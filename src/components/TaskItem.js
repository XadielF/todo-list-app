import React from 'react';
import { FaTrash, FaExpandAlt } from 'react-icons/fa';
import './TaskItem.css'; // We'll create a CSS file for TaskItem-specific styles

function TaskItem({ task, handleDeleteTask, handleExpandTask, darkMode }) {
  return (
    <li
      id={`task-${task.id}`}
      className={`task-card ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} ${task.isDeleting ? 'delete-animation-leave' : ''}`}
    >
      <div className="flex-1 relative">
        <span className={`task-text ${task.text.length > 30 ? 'fade-text' : ''}`}>
          {task.text}
        </span>
        {task.text.length > 30 && (
          <div className="fade-overlay"></div>
        )}
      </div>
      <button
        onClick={() => handleExpandTask(task)}
        className="bg-transparent p-1 rounded hover:text-blue-500 transition-transform transform active:scale-95"
      >
        <FaExpandAlt />
      </button>
      <button
        onClick={() => handleDeleteTask(task.id)}
        className="bg-transparent p-1 rounded hover:text-red-700 transition-transform transform active:scale-95"
      >
        <FaTrash className="text-red-600 hover:text-red-700" />
      </button>
    </li>
  );
}

export default TaskItem;
