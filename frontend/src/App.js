import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => setIsLoggedIn(true);
  const handleRegister = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SmartBank Portal</h1>
      </header>

      <main>
        {!isLoggedIn && (
          <>
            <Register onRegister={handleRegister} />
            <Login onLogin={handleLogin} />
          </>
        )}
        {isLoggedIn && <Profile onLogout={handleLogout} />}
      </main>
    </div>
  );
}

export default App;
