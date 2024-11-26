export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const LOAD_CART = 'LOAD_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_DELIVERY_INFO = 'SET_DELIVERY_INFO';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const loadCart = (cart) => ({
    type: LOAD_CART,
    payload: cart,
});

export const increaseQuantity = (productId) => ({
    type: INCREASE_QUANTITY,
    payload: productId,
});

export const decreaseQuantity = (productId) => ({
    type: DECREASE_QUANTITY,
    payload: productId,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const setDeliveryInfo = (deliveryInfo) => ({
    type: SET_DELIVERY_INFO,
    payload: deliveryInfo,
});