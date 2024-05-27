// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please add a task name');
      return;
    }

    onAdd({ name, isComplete: false });

    setName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
};

export default TaskForm;
