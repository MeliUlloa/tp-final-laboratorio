import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products, error, onAddProduct, addedProducts }) => {
    const navigate = useNavigate();

    const handleViewCart = () => {
        navigate('/carrito');
    };


    return (
        <div className="product_cards_container grid_preview gap-1 d-flex w-100 p-s-1 p-e-1">
            {error && <div className="error-message">{error}</div>}
            {products.map(product => (
                <div key={product.id} id={`card-${product.id}`} className={`card product-card ${addedProducts.includes(product.id) ? 'active' : ''}`}>
                    <a href={product.prospectLink} target="_blank" className="top">
                        <div className="header">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="body">
                            <h6>{product.name}</h6>
                            <p>{product.description}</p>
                            <p><span>Principio activo</span></p>
                            <p>{product.activeIngredientName}</p>
                        </div>
                    </a>
                    <div className="footer">
                        <div>
                            <button
                                className="btn-modal btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                                onClick={() => onAddProduct(product)}
                            >
                                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                    <span className="white_filled">{addedProducts.includes(product.id) ? 'Ver detalle' : 'Agregar'}</span>
                                </div>
                            </button>
                        </div>
                        <div className="calltoaction">
                            <button
                                className={`btnShop btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between ${addedProducts.includes(product.id) ? 'active' : ''}`}
                                onClick={() => onAddProduct(product)}
                            >
                                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                    <span className="white_filled">{addedProducts.includes(product.id) ? 'Agregado' : 'Agregar'}</span>
                                    <span className="btn_icon icon__shopping"></span>
                                </div>
                            </button>
                            {addedProducts.includes(product.id) && (
                                <a className="mensaje active" href="#" onClick={handleViewCart}>Ver carrito</a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
