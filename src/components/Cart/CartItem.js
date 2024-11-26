import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../redux/actions/cartActions';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleIncrease = () => {
        if (product.quantity < product.maximumUnits) {
            dispatch(increaseQuantity(product.id));
        }
    };

    const handleDecrease = () => {
        if (product.quantity > product.minimumUnits) {
            dispatch(decreaseQuantity(product.id));
        }
    };

    const handleRemove = () => {
        dispatch(removeFromCart(product.id));
    };

    return (
        <div className="card product-card flex-wrap">
            <div className="top">
                <div className="header">
                    <picture>
                        <img src={product.image} alt={product.name} />
                    </picture>
                </div>
                <div className="body">
                    <h6>{product.name}</h6>
                    <p>{product.description}</p>
                    <p><span>Principio activo</span></p>
                    <p>{product.activeIngredientName}</p>
                </div>
            </div>
            <div className="footer">
                <div className="d-flex flex-row gap-0-5 flex-wrap">
                    <button
                        className="btn_remove_card btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                        onClick={handleRemove}
                    >
                        <div className="flex_info d-flex flex-row a-items-center">
                            <span className="btn_icon icon__trash"></span>
                        </div>
                    </button>
                    <button
                        disabled={product.quantity <= product.minimumUnits}
                        className="decreasebtn btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                        onClick={handleDecrease}
                    >
                        <div className="flex_info d-flex flex-row a-items-center">
                            <span className="btn_icon icon__minus_small"></span>
                        </div>
                    </button>
                    <div className="text-field-size-lg d-flex flex-column a-items-center j-content-center">
                        <input
                            className="inputQuantity no-spin"
                            type="number"
                            min={product.minimumUnits}
                            max={product.maximumUnits}
                            value={product.quantity}
                            readOnly
                        />
                    </div>
                    <button
                        disabled={product.quantity >= product.maximumUnits}
                        className="increasebtn max-limit btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                        onClick={handleIncrease}
                    >
                        <div className="flex_info d-flex flex-row a-items-center">
                            <span className="btn_icon icon__plus_small"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
