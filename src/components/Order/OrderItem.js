import React from 'react';
import './OrderItem.css'; // Asegúrate de importar los nuevos estilos

const OrderItem = ({ order }) => (
    <a href="#" className="pedido d-flex flex-row a-items-center">
        <div className="pedido-cell">

            <p className="inter-regular c-616161 m-0 f-s-16">{order.laboratory}</p>
        </div>
        <div className="pedido-cell">

            <p className="inter-regular c-616161 m-0 f-s-16">{order.number}</p>
        </div>
        <div className="pedido-cell">

            <div>
                <div className="state-badge">{order.status}</div>
            </div>
        </div>
        <div className="pedido-cell">

            <p className="inter-regular c-616161 m-0 f-s-16">{order.date}</p>
        </div>
    </a>
);

export default OrderItem;
