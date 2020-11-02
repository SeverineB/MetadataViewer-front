import axios from 'axios';

import { baseURL } from '../constants/constants';

const api = axios.create({
 /*  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/' : 'http://metadata-viewer-server.severinebianchi.com/api/', */
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
