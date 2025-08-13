require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

const users = []; // Example: { id, username, passwordHash, role }

app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
