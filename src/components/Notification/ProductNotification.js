import React from 'react';
import { toast } from 'react-toastify';

const ProductNotification = ({ product }) => {
    const showNotification = () => {
        toast.success(
            <div>
                <strong>{product.name}</strong>
                <p>Producto agregado</p>
            </div>,
            {
                icon: "✔️",
                style: {
                    border: '1px solid #4caf50',
                    padding: '16px',
                    color: '#4caf50',
                    borderRadius: '8px',
                    background: '#fff',
                },
                progressStyle: {
                    background: '#4caf50',
                },
                closeButton: false,
                autoClose: 3000,
            }
        );
    };

    return showNotification;
};

export default ProductNotification;
