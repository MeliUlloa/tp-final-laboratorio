import React, { useState, useEffect } from 'react';
import OrdersHeader from '../../components/Order/OrdersHeader';
import OrdersFilters from '../../components/Order/OrdersFilters';
import OrdersList from '../../components/Order/OrdersList';
import FooterMyAccount from '../MyAccount/Footer/FooterMyAccount';
import { fetchLaboratoriesByUser } from '../../services/laboratoryService'; // Importa la función de servicio
import { getOrdersByUser } from '../../services/orderService'; // Importa la nueva función de servicio

const OrdersPage = () => {
    const [orders, setOrders] = useState([]); // Aquí gestionamos los pedidos
    const [laboratories, setLaboratories] = useState([]); // Estado para los laboratorios
    const [approvedLaboratories, setApprovedLaboratories] = useState([]);
    const [user, setUser] = useState(null);

    const fetchUserLaboratories = async (userId) => {
        try {
            const token = localStorage.getItem('token');
            const labs = await fetchLaboratoriesByUser(userId, token);
            setApprovedLaboratories(labs.filter(lab => lab.status === 'Approved'));
        } catch (error) {
            console.error('Error fetching laboratories:', error);
        }
    };

    const fetchUserOrders = async (userId) => {
        try {
            const token = localStorage.getItem('token');
            const orders = await getOrdersByUser(userId, token);
            setOrders(orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUser(user);
            fetchUserLaboratories(user.userId);
            fetchUserOrders(user.userId); // Obtén los pedidos del usuario
        }
    }, []);

    return (
        <main className="main__container__mis__pedidos d-flex flex-column gap-2">
            <section className="orders-header-section p-s-1 p-e-1">
                <OrdersHeader />
            </section>

            <section className="orders-filters-section p-s-1 p-e-1">
                <OrdersFilters laboratories={approvedLaboratories} />
            </section>

            <section className="orders-list-section p-s-1 p-e-1 flex-grow-1">
                <OrdersList orders={orders} /> {/* Usa los pedidos reales en lugar del mock */}
            </section>

            <section className="orders-footer-section p-s-1 p-e-1">
                <FooterMyAccount />
            </section>
        </main>
    );
};

export default OrdersPage;
