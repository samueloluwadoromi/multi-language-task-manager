// src/pages/Tasks.js
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const res = await axios.post('/api/tasks', task);
    setTasks([...tasks, res.data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = async (id) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    const updatedTask = { ...taskToToggle, isComplete: !taskToToggle.isComplete };

    const res = await axios.put(`/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map((task) => (task.id === id ? res.data : task)));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
    </div>
  );
};

export default Tasks;
