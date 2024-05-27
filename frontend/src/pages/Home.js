import React from 'react';
import '../styling/home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Your Task Manager</h1>
      <p>
        Your Task Manager is a simple and intuitive application designed to help you organize your tasks and
        stay productive. Whether you're managing personal tasks or collaborating with a team, our task manager
        has got you covered.
      </p>
      <div className="featured-content">
        <div className="feature">
          <h2>Easy Task Management</h2>
          <p>Effortlessly create, organize, and prioritize your tasks.</p>
        </div>
        <div className="feature">
          <h2>Stay Productive</h2>
          <p>Set due dates and reminders to stay on top of your tasks.</p>
        </div>
        {/* Add more featured content as needed */}
      </div>
    </div>
  );
};

export default Home;
