import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
