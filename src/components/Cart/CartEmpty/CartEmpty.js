import React from 'react';
import './CartEmpty.css'

const CartEmpty = () => (
    <div className="cart-empty-container">
        <div className="header">
            <h6 className="inter-medium f-s-18 c-616161">Su carrito está vacío</h6>
        </div>
        <div className="body">
            <p className="inter-regular f-s-16 c-616161">
                Comience a sumar muestras médicas o material promocional.
            </p>
        </div>
        <div className="footer">
            <a href="/store" className="btn buscar-muestras-btn size_1 gradient inter-medium f-s-14 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                <div className="flex_info d-flex flex-row gap-1">
                    Buscar muestras
                </div>
            </a>
        </div>
    </div>
);

export default CartEmpty;
