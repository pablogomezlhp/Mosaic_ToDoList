import axios from 'axios';
// get Connection from BackEnd
const api = axios.create({
  baseURL: 'http://localhost:8081',
});

export default api;
