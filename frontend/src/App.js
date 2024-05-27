import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/Tasks';
import Navbar from './components/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = (token) => {
    setIsAuthenticated(true);
    // Additional logic to store token or user data
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    // Additional logic to clear token or user data
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onLogin={handleLogin} />} />
          <Route path="/tasks" element={isAuthenticated ? <Tasks /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 