import React, { useState } from 'react';
import API from '../utils/api';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post('/auth/login', formData);
    console.log(res.data); // check what you actually receive
    localStorage.setItem('token', res.data.token);
    
    // If user info is missing, decode from token
    const payload = JSON.parse(atob(res.data.token.split('.')[1]));
    const name = payload.name || formData.email; // fallback
    setMessage(`Welcome, ${name}`);
    
    onLogin(); // notify App.js
  } catch (err) {
    setMessage(err.response?.data?.msg || 'Login failed');
  }
};

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
