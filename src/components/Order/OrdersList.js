import React from 'react';
import OrderItem from './OrderItem';

const OrdersList = ({ orders }) => (
    <div className="panel-container d-flex flex-column p-s-1 p-e-1 gap-0 flex-wrap" style={{ padding: '1%' }}>
        {/* Los títulos de las columnas se muestran solo una vez */}
        {orders.length > 0 && (
            <>
                <div className="pedidos-header d-flex flex-row gap-0 a-items-stretch">
                    <div className="header lab bg-EAEAEA">
                        <h6 className="inter-medium f-s-14 c-004675 m-0">Laboratorio</h6>
                    </div>
                    <div className="header nro bg-EAEAEA">
                        <h6 className="inter-medium f-s-14 c-004675 m-0">Número de pedido</h6>
                    </div>
                    <div className="header state bg-EAEAEA">
                        <h6 className="inter-medium f-s-14 c-004675 m-0">Estado</h6>
                    </div>
                    <div className="header date bg-EAEAEA">
                        <h6 className="inter-medium f-s-14 c-004675 m-0">Fecha de solicitud</h6>
                    </div>
                </div>
                {/* Línea separadora */}
                <div className="separator-line" style={{ borderBottom: '1px solid #004675', margin: '10px 0' }}></div>
            </>
        )}
        <div className="pedidos-container d-flex flex-column gap-0 a-items-center">
            {orders.length > 0 ? (
                orders.map(order => (
                    <OrderItem key={order.id} order={order} />
                ))
            ) : (
                <div className="card card-lg d-flex flex-column j-content-center a-items-center">
                    <div className="header">
                        <h6 className="inter-medium f-s-18 c-616161">No hay pedidos que coincidan con sus filtros</h6>
                    </div>
                    <div className="body">
                        <p className="inter-regular f-s-16 c-616161">Pruebe cambiar los filtros o utilizar el buscador.</p>
                    </div>
                </div>
            )}
        </div>
    </div>
);

export default OrdersList;
