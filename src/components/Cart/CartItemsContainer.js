import React from 'react';
import CartItem from './CartItem';
import CartEmpty from './CartEmpty/CartEmpty';

const CartItemsContainer = ({ products = [] }) => (
    <div className="box-container d-flex flex-column p-s-1 p-e-1 p-t-2 p-b-2 gap-1 w-100">
        <div className="box bg-ffffff b-r-2 p-s-1 p-e-1 p-t-2 p-b-2">
            <div className="d-flex flex-column gap-1">
                <div className="name_section">
                    <h3 className="c-616161 f-s-18 inter-medium m-0">Muestras médicas</h3>
                </div>
                <div className="items_cart_container d-flex flex-column gap-1">
                    {products.length > 0 ? (
                        products.map(product => (
                            <CartItem key={product.id} product={product} />
                        ))
                    ) : (
                        <CartEmpty /> // Muestra CartEmpty si no hay productos en el carrito
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default CartItemsContainer;
