import axios from 'axios';
import API_URL from '../config/config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async (email, password) => {
  try {
    const response = await api.post('/User/Login', { email, password });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const register = async (userData) => {
  try {
    console.log('data:', userData);
    const response = await api.post('/User', userData);
    console.log('passe:');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (email) => {
  try {
    const response = await api.post('/User/resetPassword', { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, register, resetPassword };
