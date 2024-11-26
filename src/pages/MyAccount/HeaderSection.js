import React from 'react';

const HeaderSection = () => {
    return (
        <div className="section-container d-flex flex-row j-content-space-between a-items-center p-s-1 p-e-1">
            <div>
                <h1 className="m-0 f-s-28 inter-medium c-004675">Mi cuenta</h1>
            </div>
            <div>
                <button
                    id=""
                    type="button"
                    className="btn btn-modal size_2 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1"
                    data-modal="saveChanges"
                >
                    <div className="flex_info d-flex flex-row gap-1 a-items-center">
                        <span>Guardar</span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default HeaderSection;
