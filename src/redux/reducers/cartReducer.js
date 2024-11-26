import { ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_CART, SET_DELIVERY_INFO } from '../actions/cartActions';

const initialState = {
    cartItems: [],
    deliveryInfo: {
        address: {
            addressId: '',
            name: '',
            street: '',
            number: '',
            locality: '',
            province: '',
            floor: '',
            apartment: '',
            zipcode: '',
        },
        note: '',
    },
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CART:
            return {
                ...state,
                cartItems: action.payload,
            };
        case ADD_TO_CART:
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if (itemExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + action.payload.minimumUnits }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: action.payload.minimumUnits }],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload && item.quantity < item.maximumUnits
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload && item.quantity > item.minimumUnits
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
                deliveryInfo: initialState.deliveryInfo, // Limpia también la información de entrega
            };
        case SET_DELIVERY_INFO:
            return {
                ...state,
                deliveryInfo: {
                    ...state.deliveryInfo,
                    ...action.payload, // Aquí guardamos toda la información de la dirección
                },
            };
        default:
            return state;
    }
};
