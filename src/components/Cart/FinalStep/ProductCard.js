import React from 'react';
const ProductCard = ({ product }) => (

    <div className="card product-card">
        <div className="top">
            <div className="header">
                <picture>
                    <img src={product.image} alt={product.description} />
                </picture>
            </div>
            <div className="body">
                <h6>{product.description}</h6>
                <p><span>Principio activo</span></p>
                <p>{product.activeIngredientName}</p>
            </div>
        </div>
        <div className="footer">
            <div className="d-flex flex-row gap-0-5 a-items-center">
                <div><p className="inter-regular c-616161 m-0 f-s-16">Cantidad</p></div>
                <div><p className="inter-medium c-004675 m-0 f-s-16 p-1 quantity-select">{product.quantity}</p></div>
            </div>
        </div>
    </div>
);

export default ProductCard;