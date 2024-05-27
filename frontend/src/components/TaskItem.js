import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.isComplete ? 'completed' : ''}`}>
      <h3>
        {task.name}{' '}
        <button onClick={() => onToggle(task.id)}>
          {task.isComplete ? 'Undo' : 'Complete'}
        </button>
      </h3>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
