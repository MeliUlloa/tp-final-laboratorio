import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import NoteCard from './NoteCard';
import EmailNotificationCard from './EmailNotificationCard';
import AddressCard from './AddressCard';

const FinalStep = () => {
    // Obtener los datos desde Redux
    const products = useSelector(state => state.cart.cartItems);
    const deliveryInfo = useSelector(state => state.cart.deliveryInfo);
    console.log(deliveryInfo)
    // Filtrar productos por tipo
    const medicalSamples = products.filter(product => product.type === 'ZFMP');
    const promotionalMaterials = products.filter(product => product.type === 'ZFMM');

    return (
        <div className="box-container d-flex flex-column p-s-1 p-e-1 p-t-2 p-b-2 gap-1 w-100">
            <div className="box bg-ffffff b-r-2 p-s-1 p-e-1 p-t-2 p-b-2">
                <div className="d-flex flex-column gap-1">

                    {/* Sección de Muestras Médicas */}
                    <SectionTitle title="Muestras médicas" />
                    <div className="items_cart_container cart_muestras_medicas d-flex flex-column gap-1">
                        {medicalSamples.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Sección de Material Promocional */}
                    <SectionTitle title="Material promocional" />
                    <div className="items_cart_container cart_material_promocional d-flex flex-column gap-1">
                        {promotionalMaterials.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Sección de Domicilio */}
                    <SectionTitle title="Domicilio" />
                    <div className="items_form_container d-flex flex-column gap-1">
                        <AddressCard address={deliveryInfo.address} />
                    </div>

                    {/* Sección de Email de Notificaciones */}
                    <SectionTitle title="Email de notificaciones" />
                    <div className="items_container d-flex flex-column gap-1">
                        {/* <EmailNotificationCard email={deliveryInfo.email} /> */}
                    </div>

                    {/* Sección de Nota de Envío */}
                    <SectionTitle title="Nota de envío" />
                    <div className="items_container d-flex flex-column gap-1">
                        <NoteCard note={deliveryInfo.note} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FinalStep;
