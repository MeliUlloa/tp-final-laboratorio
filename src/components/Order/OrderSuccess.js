import React from 'react';

const OrderSuccess = ({ orderId }) => (
    <div className="box-container d-flex flex-column p-s-1 p-e-1 p-t-2 p-b-2 gap-1 w-100">
        <div className="box bg-ffffff b-r-2 p-s-1 p-e-1 p-t-2 p-b-2">
            <div className="d-flex flex-column gap-1">
                <div className="items_container d-flex flex-column gap-1 a-items-center">
                    <div className="card success-card flex-column">
                        <div className="top">
                            <div className="body d-flex flex-column gap-0-5">
                                <div className="d-flex a-items-center gap-1 flex-column">
                                    <p><span className="icon icon__laugh"></span></p>
                                    <h6 className="inter-medium f-s-18 c-00907C m-0">Pedido exitoso</h6>
                                    <p className="t-a-center">Su número de pedido es</p>
                                    <p className="nro-de-pedido">{orderId}</p>
                                    <p>Puede realizar seguimiento desde <a href="mis-pedidos.html" className="c-00907C">Pedidos</a></p>
                                    <div>
                                        <a href="/" className="btn size_1 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                                            <div className="flex_info d-flex flex-row a-items-center gap-1">
                                                <span>Volver a inicio</span>
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

export default OrderSuccess;
