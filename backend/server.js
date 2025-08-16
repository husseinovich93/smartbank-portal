// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('Backend connected to MongoDB!');
});
// Test route
app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend is up and running!' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
