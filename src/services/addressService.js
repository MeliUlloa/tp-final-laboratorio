import axios from 'axios';
import API_URL from '../config/config'; // Asegúrate de que API_URL termine con una barra

export const getAddressesByDoctorLaboratory = async (token, laboratoryId, doctorId) => {
    try {
        const response = await axios.get(`${API_URL}Address/getAddressesByDoctorLaboratory`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'accept': 'text/plain', // Añadir el encabezado 'accept'
            },
            params: {
                LaboratoryId: laboratoryId,
                DoctorId: doctorId
            }
        });
        console.log(response.data)
        return response.data; // Asume que la respuesta tiene los datos de las direcciones
    } catch (error) {
        console.error("Error fetching addresses:", error);
        throw error;
    }
};
