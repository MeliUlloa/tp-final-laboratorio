import React from 'react';

const AddressCard = ({ address }) => (
    <div className="card address-card">
        <div className="top">

        </div>   <div className="body d-flex flex-column gap-0-5">
            <div className="d-flex a-items-center gap-1 flex-wrap">
                <p><span>Calle:</span></p>
                <p>{address.street}</p>
            </div>
            <div className="d-flex a-items-center gap-1 flex-wrap">
                <p><span>Número:</span></p>
                <p>{address.number}</p>
            </div>
            <div className="d-flex a-items-center gap-1 flex-wrap">
                <p><span>Piso:</span></p>
                <p>{address.floor}</p>
            </div>
            <div className="d-flex a-items-center gap-1 flex-wrap">
                <p><span>Departamento:</span></p>
                <p>{address.apartment}</p>
            </div>
            <div className="d-flex a-items-center gap-1 flex-wrap">
                <p><span>Localidad:</span></p>
                <p>{address.locality}</p>
            </div>
            <div className="d-flex a-items-center gap-1">
                <p><span>Provincia:</span></p>
                <p>{address.province}</p>
            </div>
        </div>
    </div>
);

export default AddressCard;