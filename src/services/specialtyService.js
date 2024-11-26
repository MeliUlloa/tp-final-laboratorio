import axios from 'axios';
import API_URL from '../config/config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchEspecialidades = async () => {
  try {
    const response = await api.get('/Specialty');
    return response.data;  // Asumiendo que el servidor responde con los datos directamente
  } catch (error) {
    console.error('Error fetching especialidades:', error);
    throw error;  // Re-throw para manejarlo en el componente
  }
};

export { fetchEspecialidades };
