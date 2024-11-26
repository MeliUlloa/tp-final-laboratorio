import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartStepper from '../../components/Cart/CartStepper';
import CartItemsContainer from '../../components/Cart/CartItemsContainer';
import CartButtons from '../../components/Cart/CartButtons';
import StoreHeader from '../../components/StoreHeader/StoreHeader';
import CartForm from '../../components/Cart/CartForm';
import FinalStep from '../../components/Cart/FinalStep/FinalStep';
import OrderSuccess from '../../components/Order/OrderSuccess';
import OrderError from '../../components/Order/OrderError';

function Cart() {
    const [currentStep, setCurrentStep] = useState(1);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [orderError, setOrderError] = useState(false); // Estado para manejar el error del pedido
    const [orderId, setOrderId] = useState('');

    const products = useSelector(state => state.cart.cartItems);

    const handleNextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handleOrderSuccess = (orderId) => {
        setOrderSuccess(true);
        setOrderId(orderId);
    };

    const handleOrderFailure = () => {
        setOrderError(true); // Activa el estado de error si ocurre un fallo
    };

    return (
        <div className="body-config body-cart">
            <StoreHeader cartItemsCount={products.length} />
            <main className="main-cart">
                <div className="title-section-container d-flex flex-column w-100 a-items-center">
                    <h2 className="inter-medium f-s-24 c-616161 m-0">Carrito</h2>
                </div>

                {!orderSuccess && !orderError ? (
                    <>
                        <CartStepper currentStep={currentStep} />
                        {currentStep === 1 && <CartItemsContainer products={products} />}
                        {currentStep === 2 && <CartForm onSubmit={handleNextStep} />}
                        {currentStep === 3 && <FinalStep />}
                        <CartButtons
                            onContinue={handleNextStep}
                            currentStep={currentStep}
                            onSubmit={handleNextStep}
                            onOrderSuccess={handleOrderSuccess}
                            onOrderFailure={handleOrderFailure} // Pasa la función de manejo de error
                        />
                    </>
                ) : orderSuccess ? (
                    <OrderSuccess orderId={orderId} />
                ) : (
                    <OrderError />
                )}
            </main>
        </div>
    );
}

export default Cart;
