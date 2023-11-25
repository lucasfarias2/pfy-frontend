import axios from 'axios';

const restClient = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

export default restClient;
