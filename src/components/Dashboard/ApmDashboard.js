import React from 'react';

const ApmDashboard = () => {
    return (
        <div className="main__inicio__APM">
            <div className="d-flex flex-column gap-1">
                <h1 className="m-0 f-s-28 inter-medium c-004675" style={{ textAlign: 'center' }}>Profesionales</h1>
            </div>
            <div className="search-container main__inicio__APM_custom d-flex flex-column w-100 p-s-1 p-e-1">
                <form autoComplete="off" target="_blank" action="tienda-apm.html" className="d-flex w-100">
                    <div className="autocomplete text-field-size-lg d-flex flex-column gap-1 w-100">
                        <label htmlFor="mySearch" className="c-616161 f-s-16 inter-regular">Buscar profesional</label>
                        <input
                            type="search"
                            id="mySearch"
                            placeholder="Ingrese nombre y apellido o matricula de un profesional"
                            title="Ingrese nombre y apellido o matricula de un profesional"
                            className="input-search-style p-1 b-r-2 inter-regular f-s-16 c-616161"
                        />
                        <button type="submit" id="submit" className="input-submit-search icon icon__search"></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApmDashboard;
