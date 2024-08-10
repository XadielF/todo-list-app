import React from 'react';
import './Modal.css';

function Modal({ expandedTask, closeModal, darkMode }) {
  return (
    <div className="modal-overlay">
      <div className={`modal-content ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h2 className="text-xl mb-4">Task Details</h2>
        <p>{expandedTask.text}</p>
        <button onClick={closeModal} className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Close</button>
      </div>
    </div>
  );
}

export default Modal;
