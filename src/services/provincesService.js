import axios from 'axios';
import API_URL from '../config/config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchProvinces = async () => {
  try {
    const response = await api.get('/Province');
    console.log(response.data)
    return response.data;  // Assuming the server responds with the data directly
  } catch (error) {
    console.error('Error fetching provinces:', error);
    throw error;  // Re-throw to handle it in the component
  }
};

export { fetchProvinces };