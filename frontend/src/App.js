import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus('Error fetching status'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SmartBank Portal</h1>
        <p>Backend says: {status}</p>
      </header>
    </div>
  );
}

export default App;
