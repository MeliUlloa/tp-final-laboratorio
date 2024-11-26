import React from 'react';

const AddressInfo = () => {
    return (
        <div className="card info-card w-100">
            <div className="top">
                <div className="body d-flex flex-column gap-0-5">
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <h6 className="inter-medium f-s-20 c-616161 m-0">Datos de domicilio</h6>
                    </div>
                    <div className="d-flex a-items-center gap-1 flex-wrap">
                        <p className="inter-regular f-s-16 c-616161 m-0">
                            La edición de su domicilio predeterminado o la incorporación de uno nuevo queda pendiente de aprobación
                            por cada uno de tus laboratorios agregados. Solo podrá solicitar envío a tu/s domicilio/s aprobados.
                        </p>
                    </div>
                    <div className="d-flex a-items-center w-100 j-content-space-between">
                        <div className="d-flex a-items-center gap-1 flex-wrap">
                            <div className="d-flex gap-0-5 a-items-center">
                                <div className="icon icon__marker"></div>
                                <p className="inter-regular c-616161 m-0 f-s-16">Consultorio</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-modal size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1"
                            data-modal="readAddress"
                        >
                            <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                <span className="btn_icon icon__eye"></span>
                            </div>
                        </button>
                    </div>
                    <div className="d-flex a-items-center w-100 j-content-space-between">
                        <div className="d-flex a-items-center gap-1 flex-wrap">
                            <div className="d-flex gap-0-5 a-items-center">
                                <div className="icon icon__marker"></div>
                                <p className="inter-regular c-616161 m-0 f-s-16">Consultorio 2</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-modal size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1"
                            data-modal="editAddress"
                        >
                            <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                <span className="btn_icon icon__pencil"></span>
                            </div>
                        </button>
                    </div>
                    <div className="d-flex flex-column a-items-center">
                        <button
                            className="btnAgregarDomicilio btn-modal btn size_2 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                            data-modal="addAddress"
                        >
                            <div className="flex_info d-flex flex-row gap-1 a-items-center j-content-center">
                                <span className="white_filled">Agregar domicilio</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressInfo;
