// src/components/Order/OrderError.js
import React from 'react';

const OrderError = () => {
    return (
        <div className="box-container d-flex flex-column p-s-1 p-e-1 p-t-2 p-b-2 gap-1 w-100">
            <div className="box bg-ffffff b-r-2 p-s-1 p-e-1 p-t-2 p-b-2">
                <div className="d-flex flex-column gap-1">
                    <div className="items_container d-flex flex-column gap-1 a-items-center">
                        <div className="card error-card flex-column">
                            <div className="top">
                                <div className="body d-flex flex-column gap-0-5">
                                    <div className="d-flex a-items-center gap-1 flex-column">
                                        <p><span className="icon icon__sad"></span></p>
                                        <h6 className="inter-medium f-s-18 c-616161 m-0 p-b-1">Problema al procesar su pedido</h6>
                                        <p>Hubo un error al procesar su solicitud de productos</p>
                                        <p>Puede ponerse en contacto a <a href="mailto:info@rofina.com.ar" className="c-00907C">info@rofina.com.ar</a></p>
                                        <div>
                                            <a href="/store" className="btn size_1 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                                                <div className="flex_info d-flex flex-row a-items-center gap-1">
                                                    <span>Volver a productos</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderError;
