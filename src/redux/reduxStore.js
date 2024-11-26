// src/redux/reduxStore.js
import { createStore, combineReducers } from 'redux';
import { cartReducer } from './reducers/cartReducer';

// Recuperar el carrito desde localStorage
const persistedState = localStorage.getItem('cartState')
    ? JSON.parse(localStorage.getItem('cartState'))
    : {};

const rootReducer = combineReducers({
    cart: cartReducer,
});

export const reduxStore = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Guardar el estado del carrito en localStorage cada vez que cambie
reduxStore.subscribe(() => {
    localStorage.setItem('cartState', JSON.stringify(reduxStore.getState()));
});
