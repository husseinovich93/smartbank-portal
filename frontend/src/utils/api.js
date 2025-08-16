import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // your backend URL
});

// Add token to requests automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
