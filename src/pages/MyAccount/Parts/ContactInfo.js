import React from 'react';

const ContactInfo = () => {
    return (
        <div className="card info-card contact-info">
            <div className="top">
                <div className="body d-flex flex-column gap-0-5" style={{ width: '166%' }}>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <h6 className="inter-medium f-s-20 c-616161 m-0">Datos de contacto</h6>
                    </div>
                    <form action="" className="d-flex gap-1 flex-column">
                        <div className="d-flex gap-1 flex-wrap flex-column">
                            <div className="d-flex flex-row w-100">
                                <div className="text-field-size-lg d-flex flex-column">
                                    <label htmlFor="emailCreate" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">
                                        Email
                                    </label>
                                    <div className="d-flex flex-row j-content-space-between gap-1 w-100">
                                        <div className="input-w-icon d-flex flex-column w-100">
                                            <span className="leading_icon icon__envelope"></span>
                                            <input
                                                id="emailCreate"
                                                disabled="disabled"
                                                type="email"
                                                required
                                                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                                                value="drestebanmartinez@gmail.com"
                                            />
                                        </div>
                                        <button
                                            className="editBtn btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1"
                                            data-edit="emailCreate"
                                        >
                                            <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                                <span className="btn_icon icon__pencil"></span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-1 flex-wrap flex-column">
                            <div className="d-flex flex-row w-100">
                                <div className="text-field-size-lg d-flex flex-column">
                                    <label
                                        htmlFor="numeroContacto"
                                        className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5"
                                    >
                                        Celular
                                    </label>
                                    <div className="d-flex flex-row j-content-space-between gap-1 w-100">
                                        <div className="input-w-icon d-flex flex-column w-100">
                                            <span className="leading_icon icon__smartphone"></span>
                                            <input
                                                id="numeroContacto"
                                                disabled="disabled"
                                                type="number"
                                                required
                                                className="f-s-16 inter-regular c-616161 b-r-2 input-style no-spin"
                                                value="1550096334"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="editBtn btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1"
                                            data-edit="numeroContacto"
                                        >
                                            <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                                <span className="editBtn btn_icon icon__pencil"></span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
