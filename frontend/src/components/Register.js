import React, { useState } from 'react';
import API from '../utils/api';

const Register = ({ onRegister }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Message and loading state
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post('/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      setMessage(`User registered! Welcome, ${res.data.user.name}`);

      // Call callback to show Profile if provided
      if (onRegister) onRegister();
    } catch (err) {
      console.error(err.response?.data);
      setMessage(err.response?.data?.msg || 'Registration failed');
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
