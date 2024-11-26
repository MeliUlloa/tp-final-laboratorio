import axios from 'axios';
import API_URL from '../config/config';

const getProductsByType = async ({ search = '', tipo = '', idEspecialidad = '' }) => {
    const token = localStorage.getItem('token');  // Asegúrate de manejar el token correctamente
    try {
        const response = await axios.get(`${API_URL}Product/GetProducts/${tipo}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            params: {
                search,
                idEspecialidad
            }
        });
        return response.data;  // Asumiendo que los productos se devuelven en el cuerpo de la respuesta
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export { getProductsByType };
