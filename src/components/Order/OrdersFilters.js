import React, { useState } from 'react';
import './OrderItem.css';

const OrdersFilters = ({ laboratories }) => {
    const [isLabDropdownOpen, setIsLabDropdownOpen] = useState(false);

    // Función para alternar la visibilidad del menú desplegable
    const toggleLabDropdown = () => {
        setIsLabDropdownOpen(!isLabDropdownOpen);
    };

    console.log('en orders', laboratories)

    return (
        <div className="controls-container d-flex flex-column flex-wrap element active">
            {/* Fila search y paginación */}
            <div className="search-pagination-container d-flex flex-row flex-wrap a-items-center">
                {/* Contenido a la izq. */}
                <div className="search-container d-flex flex-column">
                    <form autoComplete="off" target="_blank" action="" className="d-flex search-form">
                        <div className="autocomplete text-field-size-lg d-flex flex-column gap-1 w-100">
                            <input
                                type="search"
                                id="mySearch"
                                placeholder="Ingrese número de pedido"
                                title="Ingrese número de pedido"
                                className="input-search-style p-1 b-r-2 inter-regular f-s-16 c-616161"
                            />
                            <button
                                type="submit"
                                id="submit"
                                className="input-submit-search style icon icon__search"
                            ></button>
                        </div>
                    </form>
                </div>
                {/* Contenido a la der. */}
                <div className="pagination-controls d-flex flex-row gap-0-5 a-items-center">
                    <div>

                    </div>
                    <div>
                        <p className="inter-regular f-s-14 m-0 c-616161">1/25</p>
                    </div>
                    <div>
                        <button type="button" disabled className="btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
                            <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                <span className="btn_icon icon__angle_small_left"></span>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
                            <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                <span className="btn_icon icon__angle_small_right"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Fila de botones */}
            <div id="filters" className="filters-container d-flex flex-row gap-1 a-items-center j-content-space-between flex-wrap">
                {/* Contenido a la izq. */}
                <div className="info d-flex flex-row gap-1 a-items-center flex-wrap">
                    <div>
                        <p className="inter-regular f-s-14 c-616161 m-0">Filtrar por:</p>
                    </div>
                    <div className="buttons-container d-flex flex-row gap-1 flex-wrap">
                        {/* Boton para filtrar por período */}
                        <div className="dropdown d-flex flex-column">
                            <button className="btn dropBtn size_1 white inter-medium f-s-14 m-0 c-004675 W-100 d-flex flex-row a-items-center j-content-space-between">
                                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                    <span className="btn_icon icon__calendar"></span>
                                    Período
                                    <span className="filter-active"> 1</span>
                                </div>
                                <span className="btn_icon icon__angle_small_down active"></span>
                            </button>
                            <div className="m-0 p-0-5 b-r-1 dropMenu left d-flex flex-column">
                                <form action="" className="d-flex flex-column w-100">
                                    <div className="text-field-size-lg d-flex flex-column">
                                        <label
                                            htmlFor="dateInput"
                                            className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5"
                                        >
                                            Fecha
                                        </label>
                                        <div className="d-flex flex-column">
                                            <input
                                                id="dateInput"
                                                type="date"
                                                className="f-s-14 inter-regular c-616161 b-r-2 input-style"
                                                pattern="\d{4}-\d{2}-\d{2}"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row a-items-center gap-0-5 p-t-1 p-b-1">
                                        <div className="w-100">
                                            <button className="btn white size_0-5 w-100 inter-medium f-s-14 c-616161">
                                                Borrar
                                            </button>
                                        </div>
                                        <div className="w-100">
                                            <button className="btn gradient size_0-5 w-100 inter-medium f-s-14 c-ffffff">
                                                Aplicar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Boton para filtrar por estado */}
                        <div className="dropdown d-flex flex-column">
                            <button className="btn dropBtn size_1 white inter-medium f-s-14 m-0 c-004675 W-100 d-flex flex-row a-items-center j-content-space-between">
                                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                    <span className="btn_icon icon__pedidos"></span>
                                    Estado
                                </div>
                                <span className="btn_icon icon__angle_small_down"></span>
                            </button>
                            <div className="m-0 p-0-5 b-r-1 dropMenu left d-flex flex-column">
                                <form action="" className="d-flex flex-column w-100">
                                    <ul className="checkboxes d-flex flex-column p-0">
                                        <li className="d-flex flex-row a-items-center j-content-space-between p-t-0-5 p-b-0-5">
                                            <label htmlFor="pendiente" className="container inter-regular f-s-14 c-616161 m-0">
                                                Pendiente
                                                <input type="checkbox" id="pendiente" value="pendiente" />
                                                <span className="check"></span>
                                            </label>
                                        </li>
                                        <li className="d-flex flex-row a-items-center j-content-space-between p-t-0-5 p-b-0-5">
                                            <label htmlFor="enProceso" className="container inter-regular f-s-14 c-616161 m-0">
                                                En proceso
                                                <input type="checkbox" id="enProceso" value="En proceso" />
                                                <span className="check"></span>
                                            </label>
                                        </li>
                                        <li className="d-flex flex-row a-items-center j-content-space-between p-t-0-5 p-b-0-5">
                                            <label htmlFor="preparadoConFaltantes" className="container inter-regular f-s-14 c-616161 m-0">
                                                Preparado con faltantes
                                                <input type="checkbox" id="preparadoConFaltantes" value="Preparado con faltantes" />
                                                <span className="check"></span>
                                            </label>
                                        </li>
                                        <li className="d-flex flex-row a-items-center j-content-space-between p-t-0-5 p-b-0-5">
                                            <label htmlFor="preparado" className="container inter-regular f-s-14 c-616161 m-0">
                                                Preparado
                                                <input type="checkbox" id="preparado" value="Preparado" />
                                                <span className="check"></span>
                                            </label>
                                        </li>
                                        <li className="d-flex flex-row a-items-center j-content-space-between p-t-0-5 p-b-0-5">
                                            <label htmlFor="preparadoConFaltantesenDistribucion" className="container inter-regular f-s-14 c-616161 m-0">
                                                Preparado con faltantes – en distribución
                                                <input type="checkbox" id="preparadoConFaltantesenDistribucion" value="Preparado con faltantes – en distribución" />
                                                <span className="check"></span>
                                            </label>
                                        </li>
                                        <li className="d-flex flex-row a-items-center j-content-space-between p-t-0-5 p-b-0-5">
                                            <label htmlFor="preparadoEnDistribucion" className="container inter-regular f-s-14 c-616161 m-0">
                                                Preparado - en distribución
                                                <input type="checkbox" id="preparadoEnDistribucion" value="Preparado - en distribución" />
                                                <span className="check"></span>
                                            </label>
                                        </li>
                                        <li className="d-flex flex-row a-items-center j-content-space-between p-t-0-5 p-b-0-5">
                                            <label htmlFor="Entregado" className="container inter-regular f-s-14 c-616161 m-0">
                                                Entregado
                                                <input type="checkbox" id="Entregado" value="Entregado" />
                                                <span className="check"></span>
                                            </label>
                                        </li>
                                    </ul>
                                    <div className="d-flex flex-row a-items-center gap-1 p-t-1 p-b-1">
                                        <div className="w-100">
                                            <button className="btn white size_0-5 w-100 inter-medium f-s-14 c-616161">Borrar</button>
                                        </div>
                                        <div className="w-100">
                                            <button className="btn gradient size_0-5 w-100 inter-medium f-s-14 c-ffffff">Aplicar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Boton para filtrar por laboratorio */}
                        <div className="dropdown d-flex flex-column">
                            <button
                                className="btn dropBtn size_1 white inter-medium f-s-14 m-0 c-004675 W-100 d-flex flex-row a-items-center j-content-space-between"
                                onClick={toggleLabDropdown} // Llamada a la función al hacer clic
                            >
                                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                    <span className="btn_icon icon__pedidos"></span>
                                    Laboratorio
                                </div>
                                <span className={`btn_icon icon__angle_small_down ${isLabDropdownOpen ? 'active' : ''}`}></span>
                            </button>
                            {isLabDropdownOpen && (
                                <div className={`m-0 p-0-5 b-r-1 dropMenu left d-flex flex-column ${isLabDropdownOpen ? 'active' : ''}`}>
                                    <form action="" className="d-flex flex-column w-100">
                                        <ul className="checkboxes d-flex flex-column p-0">
                                            {laboratories.map(lab => (
                                                <li key={lab.laboratoryId} className="d-flex flex-row a-items-center j-content-space-between p-t-0-5 p-b-0-5">
                                                    <label htmlFor={lab.laboratoryId} className="container inter-regular f-s-14 c-616161 m-0">
                                                        {lab.laboratoryName}
                                                        <input type="checkbox" id={lab.laboratoryId} value={lab.laboratoryName} />
                                                        <span className="check"></span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="d-flex flex-row a-items-center gap-1 p-t-1 p-b-1">
                                            <div className="w-100">
                                                <button className="btn white size_0-5 w-100 inter-medium f-s-14 c-616161">Borrar</button>
                                            </div>
                                            <div className="w-100">
                                                <button className="btn gradient size_0-5 w-100 inter-medium f-s-14 c-ffffff btn-apply">Aplicar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Contenido a la der */}
                <div>
                    <button disabled type="button" className="btn size_1 white inter-medium f-s-16 m-0 c-004675">
                        Borrar filtros
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrdersFilters;
