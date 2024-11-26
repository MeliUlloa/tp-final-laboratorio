import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products, onProductDetailClick, onAddProduct, addedProducts }) => {
    const navigate = useNavigate();

    const handleViewCart = () => {
        navigate('/carrito');
    };

    return (
        <div className="product_list_container d-flex flex-column w-100 p-s-1 p-e-1">
            {products.map(product => (
                <div key={product.id} id={`list-item-${product.id}`} className="list-item product-card d-flex flex-row gap-1">
                    <a href={product.prospectLink} target="_blank" className="list-image">
                        <img src={product.imageUrl} alt={product.name} />
                    </a>
                    <div className="list-details d-flex flex-column justify-content-between">
                        <div className="body">
                            <h6>{product.name}</h6>
                            <p>{product.description}</p>
                            <p><span>Principio activo:</span> {product.activeIngredientName}</p>
                        </div>
                        <div className="footer d-flex flex-row gap-1">
                            <button
                                className="btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                                onClick={() => onProductDetailClick(product)}
                            >
                                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                    <span className="white_filled">Ver detalle</span>
                                </div>
                            </button>
                            <button
                                className="btnShop btn size_1 white inter-medium f-s-16 m-0 c-ffffff"
                                onClick={() => onAddProduct(product)}
                            >
                                <span className="white_filled">{addedProducts.includes(product.id) ? 'Agregado' : 'Agregar'}</span>
                                <span className="btn_icon icon__shopping"></span>
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

export default ProductList;
