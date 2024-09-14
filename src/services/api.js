import axios from 'axios';

const API_BASE_URL = 'https://web-be-x07a.onrender.com';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const api = {
  get: async (endpoint, params = {}) => {
    const response = await axiosInstance.get(endpoint, {params});
    return response.data;
  },

  post: async (endpoint, data) => {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  },

  // Add other methods as needed (put, delete, etc.)
};          