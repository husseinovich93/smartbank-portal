import React, { useEffect, useState } from 'react';
import API from '../utils/api';

function Profile({ onLogout }) {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/auth/me');
        setUser(res.data);
        setMessage('');
      } catch (err) {
        setMessage('Failed to load user');
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout(); // notify App.js to show forms
  };

  if (message) return <p>{message}</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>ID: {user._id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
