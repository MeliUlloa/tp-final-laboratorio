import React, { useState, useEffect } from 'react';
import { getAddressesByDoctorLaboratory } from '../../services/addressService';
import { useLaboratory } from '../../contexts/LaboratoryContext';
import { useSelector, useDispatch } from 'react-redux';
import { setDeliveryInfo } from '../../redux/actions/cartActions';

const CartForm = () => {
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [addresses, setAddresses] = useState([]);
    const { selectedLaboratory } = useLaboratory();
    const dispatch = useDispatch();

    const deliveryInfo = useSelector(state => state.cart.deliveryInfo); // Obtén la info de entrega de Redux

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('user'))?.token;
                const userId = JSON.parse(localStorage.getItem('user'))?.userId;
                const data = await getAddressesByDoctorLaboratory(token, selectedLaboratory.id, userId);
                setAddresses(data);
            } catch (error) {
                console.error("Failed to fetch addresses", error);
            }
        };

        fetchAddresses();
    }, [selectedLaboratory.id]);

    // Actualiza los valores del formulario si ya existe información de entrega en Redux
    useEffect(() => {
        if (deliveryInfo?.address) {
            setAddress(deliveryInfo.address.addressId);
        }
        if (deliveryInfo?.note) {
            setNote(deliveryInfo.note);
        }
    }, [deliveryInfo]);

    const handleAddressChange = (selectedAddress) => {
        const addressInfo = addresses.find(addr => addr.addressId === selectedAddress);
        setAddress(addressInfo.addressId);
        dispatch(setDeliveryInfo({ address: addressInfo }));
    };

    const handleNoteChange = (newNote) => {
        setNote(newNote);
        dispatch(setDeliveryInfo({ note: newNote })); // Actualiza Redux con la nota
    };

    return (
        <div className="box-container d-flex flex-column p-s-1 p-e-1 p-t-2 p-b-2 gap-1 w-100">
            <div className="box bg-ffffff b-r-2 p-s-1 p-e-1 p-t-2 p-b-2">
                <form className="d-flex flex-row flex-wrap gap-1">
                    <div className="d-flex flex-column gap-1 items-form">
                        {/* Select Domicilio */}
                        <div className="d-flex gap-1 flex-wrap">
                            <div className="select-box d-flex flex-column">
                                <div className="d-flex flex-row j-content-space-between a-items-center">
                                    <label
                                        htmlFor="mis-domicilios"
                                        className="m-0 f-s-16 inter-regular c-004675 p-s-1 p-e-1 p-t-0-5 p-b-0-5"
                                    >
                                        Domicilio de entrega
                                    </label>
                                    <div className="tooltipDomicilio tooltip_btn icono_tooltip icono__info">
                                        <div className="tooltip_text p-0-5 bg-F9F9F9 b-r-1">
                                            <p className="inter-regular f-s-12 c-616161 m-0">
                                                Solo podrá seleccionar los domicilios aprobados por su laboratorio.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <span className="icon icon__marker"></span>
                                <select
                                    name="mis-domicilios"
                                    id="mis-domicilios"
                                    className="select-style w-icon b-r-2"
                                    required
                                    value={address}
                                    onChange={(e) => handleAddressChange(e.target.value)}
                                >
                                    <option value="">Seleccione domicilio</option>
                                    {addresses.map((address) => (
                                        <option key={address.addressId} value={address.addressId}>
                                            {address.province}, {address.locality}, {address.street}, {address.number}
                                            {address.floor && ` Piso: ${address.floor}`}
                                            {address.apartment && ` Depto: ${address.apartment}`}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-1 items-form">
                        {/* Textarea Nota de Envío */}
                        <div className="text-field-size-lg d-flex flex-column">
                            <div className="d-flex flex-row j-content-space-between a-items-center">
                                <label
                                    htmlFor="notaEnvio"
                                    className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5"
                                >
                                    Nota de envío
                                </label>
                                <div className="tooltipNotaEnvio tooltip_btn icono_tooltip icono__info">
                                    <div className="tooltip_text p-0-5 bg-F9F9F9 b-r-1">
                                        <p className="inter-regular f-s-12 c-616161 m-0">
                                            Agregue información importante para su pedido.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="input-w-icon d-flex flex-column">
                                <textarea
                                    id="notaEnvio"
                                    required
                                    className="f-s-16 inter-regular c-616161 b-r-1 input-style"
                                    placeholder=""
                                    value={note}
                                    onChange={(e) => handleNoteChange(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CartForm;

