import axios from 'axios';
import API_URL from '../config/config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchLaboratories = async () => {
  try {
    const response = await api.get('Laboratory');
    return response.data;  // Assuming the server responds with the data directly
  } catch (error) {
    console.error('Error fetching laboratories:', error);
    throw error;  // Re-throw to handle it in the component
  }
};

const fetchLaboratoriesByUser = async (userId, token) => {
  try {
    const response = await api.get(`Laboratory/getLaboratoriesByUser/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;  // Assuming the server responds with the data directly
  } catch (error) {
    console.error('Error fetching laboratories by user:', error);
    throw error;  // Re-throw to handle it in the component
  }
};

const createUserDetailLaboratory = async (userId, laboratoryId, token) => {
  try {
    const response = await api.post('Lab/newUserLab', {
      userId,
      laboratoryId
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user detail laboratory:', error);
    throw error;
  }
};

export { fetchLaboratories, fetchLaboratoriesByUser, createUserDetailLaboratory };
