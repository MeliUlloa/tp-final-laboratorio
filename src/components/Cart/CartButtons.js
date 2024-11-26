import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/actions/cartActions';
import ClearCartModal from '../modals/modalCart/ClearCartModal';
import { placeOrder } from '../../services/orderService';
import { useLaboratory } from '../../contexts/LaboratoryContext';

const CartButtons = ({ onContinue, currentStep, onSubmit, onOrderSuccess, onOrderFailure }) => {

    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const deliveryInfo = useSelector(state => state.cart.deliveryInfo); // Obtener info de entrega del estado
    const products = useSelector(state => state.cart.cartItems); // Obtener productos del carrito
    const { selectedLaboratory } = useLaboratory();

    const handleClearCart = () => {
        setIsModalOpen(true); // Abre el modal
    };

    const handleConfirmClearCart = () => {
        dispatch(clearCart());
        setIsModalOpen(false); // Cierra el modal después de vaciar el carrito
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Cierra el modal sin vaciar el carrito
    };

    const handleContinue = () => {
        if (currentStep === 2) {
            onSubmit(); // Llama al onSubmit del formulario
        } else {
            onContinue();
        }
    };

    const handleFinish = async () => {
        try {
            const token = JSON.parse(localStorage.getItem('user'))?.token;
            const orderData = {
                AddressId: deliveryInfo.address.addressId,
                LaboratoryId: selectedLaboratory.id,
                ShippingNotes: deliveryInfo.note,
                Items: products.map(product => ({
                    ProductId: product.id,
                    SAPCode: product.sapCode,
                    Description: product.description,
                    Quantity: product.quantity
                }))
            };

            const response = await placeOrder(orderData, token);
            console.log('Order placed successfully:', response);
            dispatch(clearCart()); // Limpia el carrito después de realizar la orden

            if (onOrderSuccess) {
                onOrderSuccess(response.orderId); // Llama a la función onOrderSuccess si está definida
            }

        } catch (error) {
            console.error('Failed to place order:', error);
            if (onOrderFailure) {
                onOrderFailure(); // Llama a la función onOrderFailure si ocurre un error
            }
        }
    };

    return (
        <div className="buttons-container p-fixed">
            <div className="d-flex flex-row gap-1 a-items-center j-content-end">
                {currentStep === 1 && (
                    <button
                        onClick={handleClearCart}
                        data-modal="cart-remove"
                        className="btn-modal btn size_1 white danger inter-medium f-s-16 m-0 c-C3001B W-100 d-flex flex-row a-items-center j-content-space-between"
                    >
                        <div className="flex_info d-flex flex-row a-items-center">
                            <span>Vaciar carrito</span>
                            <span className="btn_icon icon__trash_red"></span>
                        </div>
                    </button>
                )}
                {(currentStep === 1 || currentStep === 2) && (
                    <button
                        onClick={handleContinue}
                        className="btn size_1 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                    >
                        <div className="flex_info d-flex flex-row a-items-center gap-1">
                            <span>Continuar</span>
                            <span className="btn_icon icon__arrow_right"></span>
                        </div>
                    </button>
                )}
                {currentStep === 3 && (
                    <button
                        onClick={handleFinish}
                        className="btn size_1 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                    >
                        <div className="flex_info d-flex flex-row a-items-center gap-1">
                            <span>Finalizar</span>
                            <span className="btn_icon icon__arrow_right"></span>
                        </div>
                    </button>
                )}
            </div>
            <ClearCartModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onClearCart={handleConfirmClearCart}
            />
        </div>
    );
};

export default CartButtons;
