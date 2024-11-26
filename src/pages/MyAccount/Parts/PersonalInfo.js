import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="card info-card personal-info">
            <div className="top">
                <div className="body d-flex flex-column gap-0-5">
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <h6 className="inter-medium f-s-20 c-616161 m-0">Datos personales</h6>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">Nombre:</span>
                        </p>
                        <p className="inter-regular c-616161 m-0 f-s-16">Esteban Martinez</p>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">DNI:</span>
                        </p>
                        <p className="inter-regular c-616161 m-0 f-s-16">30.087.000</p>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">Fecha de nacimiento:</span>
                        </p>
                        <p className="inter-regular c-616161 m-0 f-s-16">01-02-1985</p>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular c-616161 m-0 f-s-16">
                            <span className="inter-medium">Genero:</span>
                        </p>
                        <p className="inter-regular c-616161 m-0 f-s-16">Masculino</p>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <div className="d-flex a-items-center w-100 j-content-space-between">
                            <div className="d-flex a-items-center gap-1 flex-wrap">
                                <div className="d-flex gap-0-5 a-items-center">
                                    <div className="icon icon__key"></div>
                                    <p className="inter-regular c-616161 m-0 f-s-16">Contraseña</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn-modal btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1"
                                data-modal="EditPassword" style={{ marginLeft: '166%' }}
                            >
                                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                    <span className="btn_icon icon__pencil"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
