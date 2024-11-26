import React from 'react';

const CartStepper = ({ currentStep }) => (
    <div className="stepper-container w-100 p-s-1 p-e-1">
        <ul className="stepper d-flex flex-row a-items-center j-content-space-between w-100">
            {/* Paso 1: Agregar productos */}
            <li className={currentStep >= 2 ? 'completed' : ''}>
                <a href="cart.html" className="inter-regular c-616161 f-s-14">
                    <span className={`label ${currentStep >= 2 ? 'icon' : 'f-s-16 inter-regular c-616161'}`}>
                        {currentStep === 1 ? '1' : ''}
                    </span>
                    Agregar productos
                </a>
            </li>

            {/* Paso 2: Configurar entrega */}
            <li className={currentStep === 3 ? 'completed' : currentStep === 2 ? 'completed' : ''}>
                <a href="#" className="inter-regular c-616161 f-s-14">
                    <span className={`label ${currentStep === 3 ? 'icon' : 'f-s-16 inter-regular c-616161'}`}>
                        {currentStep === 3 ? '' : '2'}
                    </span>
                    Configurar entrega
                </a>
            </li>

            {/* Paso 3: Confirmar pedido */}
            <li className={currentStep === 3 ? 'completed' : ''}>
                <a href="#" className="inter-regular c-616161 f-s-14">
                    <span className="label f-s-16 inter-regular c-616161">3</span>
                    Confirmar pedido
                </a>
            </li>
        </ul>
    </div>
);

export default CartStepper;
