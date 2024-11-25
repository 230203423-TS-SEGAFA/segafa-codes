import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import AddCard from './component/AddCard';

function App() {
  const user = {
    profilePicture: 'path/to/profile-picture.jpg',
    name: 'Thulaganyo',
    email: 'john.doe@example.com',
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard user={user} onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;
