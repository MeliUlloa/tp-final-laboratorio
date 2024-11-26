// src/services/orderService.js
import axios from 'axios';
import API_URL from '../config/config';

// Función para colocar un pedido
export const placeOrder = async (orderData, token) => {
    try {
        const response = await axios.post(`${API_URL}Order/add`, orderData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data; // Asume que la respuesta tiene los datos de la orden creada
    } catch (error) {
        console.error('Error placing order:', error);
        throw error;
    }
};

// Función para obtener los pedidos de un usuario
export const getOrdersByUser = async (userId, token) => {
    try {
        const response = await axios.get(`${API_URL}Order/GetOrdersByUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                userId: userId
            }
        });
        return response.data; // Asume que la respuesta contiene la lista de pedidos del usuario
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};


// src/services/orderService.js
// Import axios solo si planeas hacer llamadas reales, para la simulación no es necesario
// import axios from 'axios';
// import API_URL from '../config/config';

// export const placeOrder = async (orderData, token) => {
//     try {
//         // Simulación de una respuesta del servidor
//         const simulatedResponse = {
//             success: true,
//             message: "Orden creada exitosamente",
//             orderId: "1234567890abcdef",
//             orderDetails: orderData,
//             timestamp: new Date().toISOString()
//         };

//         // Simula un retraso como si estuviera llamando a una API real
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         // Retorna la respuesta simulada
//         return simulatedResponse;

//         // Si quieres volver a la llamada real, descomenta lo siguiente:
//         // const response = await axios.post(`${API_URL}Order/add`, orderData, {
//         //     headers: {
//         //         Authorization: `Bearer ${token}`,
//         //         'Content-Type': 'application/json',
//         //     }
//         // });
//         // return response.data; // Asume que la respuesta tiene los datos de la orden creada

//     } catch (error) {
//         console.error('Error placing order:', error);
//         throw error;
//     }
// };

