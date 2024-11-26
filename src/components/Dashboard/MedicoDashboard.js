import React, { useState } from 'react';

const MedicoDashboard = ({
    pendingLaboratories,
    approvedLaboratories,
    getImageSrc,
    handleLaboratoryClick,
    openModal
}) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (accordionId) => {
        setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
    };

    return (
        <main className="main__container__inicio">
            <div className="d-flex flex-column gap-1 p-t-1 p-b-1">
                <div className="d-flex flex-column mensaje">
                    <div className="Toastify" style={{ display: 'none' }}>
                        <div className="Toastify__toast-container Toastify__toast-container--top-center">
                            <div className="Toastify__toast p-1 b-r-0-5 d-flex j-content-space-between ">
                                <div className="Toastify__toast-body d-flex a-items-center gap-1">
                                    <div className="d-flex flex-row gap-1">
                                        <div className="icon icon__hour-glass"></div>
                                        <div className="d-flex flex-column gap-0-5">
                                            <p className="inter-medium f-s-16 m-0 c-616161">Solicitud en proceso</p>
                                            <p className="inter-regular f-s-14 m-0 c-616161">Su cuenta está pendiente de aprobación por el laboratorio seleccionado.</p>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="Toastify__close-button">
                                    <span className="icon icon-close"></span>
                                </button>
                                <div className="Toastify__progress-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="m-0 f-s-28 inter-medium c-004675">Laboratorios</h1>
                </div>
                <div className="accordions d-flex flex-column gap-1">
                    <div
                        id="pendientesAprobacion"
                        className={`accordionBtn inter-medium f-s-18 m-0 c-616161 W-100 d-flex flex-row a-items-center j-content-space-between gap-1 ${activeAccordion === 'pendientesAprobacion' ? 'active' : ''}`}
                        onClick={() => toggleAccordion('pendientesAprobacion')}
                    >
                        <div className="flex_info d-flex flex-row gap-1 a-items-center">
                            <span>Pendientes de aprobación</span>
                        </div>
                        <span className="icon icon__angle"></span>
                    </div>
                    <ul className={`laboratorios_disponibles d-flex a-items-center gap-1 flex-wrap ${activeAccordion === 'pendientesAprobacion' ? 'accordion_body active' : ''}`}>
                        {pendingLaboratories.map(lab => (
                            <li key={lab.laboratoryId} className="pending-approval">
                                <a href="#" className="btn_lab d-flex flex-column gap-0-25 link bg-ffffff b-r-1 a-items-center">
                                    <img src={getImageSrc(lab.laboratoryName)} alt={lab.laboratoryName} />
                                    <p className="f-s-12 inter-regular c-616161 m-0">{lab.laboratoryName}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div
                        id="disponibles"
                        className={`accordionBtn inter-medium f-s-18 m-0 c-616161 W-100 d-flex flex-row a-items-center j-content-space-between gap-1 ${activeAccordion === 'disponibles' ? 'active' : ''}`}
                        onClick={() => toggleAccordion('disponibles')}
                    >
                        <div className="flex_info d-flex flex-row gap-1 a-items-center">
                            <span>Disponibles</span>
                        </div>
                        <span className="icon icon__angle"></span>
                    </div>
                    <ul className={`laboratorios_disponibles d-flex a-items-center gap-1 flex-wrap ${activeAccordion === 'disponibles' ? 'accordion_body active' : ''}`}>
                        {approvedLaboratories.map(lab => (
                            <li key={lab.laboratoryId}>
                                <a onClick={() => handleLaboratoryClick(lab)} className="btn_lab active d-flex flex-column gap-0-25 link bg-ffffff b-r-1 a-items-center">
                                    <img src={getImageSrc(lab.laboratoryName)} alt={lab.laboratoryName} />
                                    <p className="f-s-12 inter-regular c-616161 m-0">{lab.laboratoryName}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button
                    id="agregarLaboratoriosbtn"
                    type="button"
                    className="agregarLaboratorios addlab btn size_2 gradient inter-medium f-s-16 m-0 c-ffffff d-flex flex-row a-items-center j-content-space-between gap-1"
                    onClick={openModal}
                >
                    <div className="flex_info d-flex flex-row gap-1 a-items-center">
                        <span>Agregar laboratorio</span>
                    </div>
                    <div className="d-flex">
                        <span className="btn_icon icon__arrow_right"></span>
                    </div>
                </button>
            </div>
        </main>
    );
};

export default MedicoDashboard;
