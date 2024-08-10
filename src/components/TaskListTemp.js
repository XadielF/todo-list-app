import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, handleDeleteTask, handleExpandTask, darkMode }) {
  return (
    <ul className="w-full max-w-xs">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleExpandTask={handleExpandTask}
          darkMode={darkMode}
        />
      ))}
    </ul>
  );
}

export default TaskList;
