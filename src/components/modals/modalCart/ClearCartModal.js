import React from 'react';

const ClearCartModal = ({ isOpen, onClose, onClearCart }) => {
    if (!isOpen) return null; // No renderiza nada si el modal no está abierto

    return (
        <div id="modal-cart-remove" className="custom-modal-overlay p-fixed d-flex a-items-center j-content-center">
            <div className="modal-dialog d-flex flex-column j-content-end custom-modal-dialog custom-modal-dialog-cart ">
                <div className="modal-content d-flex flex-column a-items-bottom b-r-t-l-0-5 b-r-t-r-0-5 gap-1" style={{ marginLeft: '1%' }}>
                    <div className="modal-header d-flex gap-0-5 a-items-center">
                        <a href="#" onClick={onClose} className="link d-flex a-items-center gap-0-5">
                            <span class="icon icon__arrow__back"></span>
                            <h1 className="modal-title link c-616161 f-s-20 inter-medium link m-0" id="">Vaciar carrito</h1>
                        </a>
                    </div>
                    <div className="modal-body">
                        <div className="info d-flex flex-column gap-1">
                            <p className="inter-regular">¿Quiere eliminar todos los productos del carrito?</p>
                        </div>
                    </div>
                    <div className="modal-footer d-flex flex-column p-t-1">
                        <div className="info d-flex flex-row gap-1 a-items-center j-content-end">
                            <div className="calltoaction">
                                <button onClick={onClearCart} className="removeAllItems btnShop btn size_1 white danger inter-medium f-s-16 m-0 c-C3001B W-100 d-flex flex-row a-items-center j-content-space-between">
                                    <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                        <span>Si, vaciar carrito</span>
                                        <span className="btn_icon icon__trash_red"></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClearCartModal;
