import React from 'react';
import './ProfessionalInfo.css';

const ProfessionalInfo = () => {
    return (
        <div className="card info-card professional-info">
            <div className="top">
                <div className="body d-flex flex-column gap-0-5">
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <h6 className="inter-medium f-s-20 c-616161 m-0">Datos profesionales</h6>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">Carrera / Rama:</span>
                        </p>
                        <p className="inter-regular c-616161 m-0 f-s-16">Medicina</p>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">Especialidad:</span>
                        </p>
                        <ul className="d-flex p-0 gap-0-5 flex-wrap">
                            <li className="p-s-1 p-t-0-5 p-e-1 p-b-0-5 bg-EAEAEA b-r-1">
                                <p className="inter-regular c-616161 m-0 f-s-14">Dermatología</p>
                            </li>
                            <li className="p-s-1 p-t-0-5 p-e-1 p-b-0-5 bg-EAEAEA b-r-1">
                                <p className="inter-regular c-616161 m-0 f-s-14">Clínico</p>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">Matricula:</span>
                        </p>
                        <p className="inter-regular c-616161 m-0 f-s-16">Nacional</p>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">Matricula nro.:</span>
                        </p>
                        <p className="inter-regular c-616161 m-0 f-s-16">123456789</p>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">Laboratorio:</span>
                        </p>
                        <p className="inter-regular c-616161 m-0 f-s-16">Roemmmers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalInfo;
