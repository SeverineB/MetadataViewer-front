import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    'Access-Control-Allow-Headers': 'Accept, Content-Type, Authorization',
  },
});

export default api;
