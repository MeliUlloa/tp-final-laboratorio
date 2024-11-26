import React, { useState, useEffect } from 'react';
import { fetchProvinces } from '../../../services/provincesService';

function Step2({ nextStep, prevStep, formData, updateFormData }) {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProvinces = async () => {
      try {
        const data = await fetchProvinces();
        setProvinces(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadProvinces();
  }, []);

  const handleChange = (e) => {
    const updatedAddress = { ...formData.addresses[0], [e.target.name]: e.target.value };
    updateFormData({ addresses: [updatedAddress] });
  };

  return (
    <div id="formRegistro__2" className="form form__paso__2 d-flex flex-column gap-1 active w-100 j-content-center a-items-center">
      <div className="progress-box d-flex flex-column flex-auto">
        <div className="progress">
          <div className="progress-state state-50"></div>
        </div>
      </div>
      <form className="d-flex flex-column p-1 bg-ffffff b-r-1 d-flex flex-column gap-1">
        <div className="d-flex j-content-between flex-wrap">
          <div className="title_flex">
            <h6 className="m-0 f-s-18 inter-medium c-004675">Domicilio</h6>
          </div>
          <div>
            <div className="tooltipDomicilio tooltip_btn icono_tooltip icono__info">
              <div id="" className="tooltip_text p-0-5 bg-F9F9F9 b-r-1">
                <p className="inter-regular f-s-12 c-616161 m-0">Configure un domicilio para el envío.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="d-flex gap-1 flex-wrap">
          <div className="select-box d-flex flex-column">
            <label htmlFor="province" className="m-0 f-s-16 inter-regular c-004675 p-s-1 p-e-1 p-t-0-5 p-b-0-5">Provincia</label>
            <span className="icon icon__marker"></span>
            <select
              name="province"
              id="province"
              className="select-style w-icon b-r-2"
              value={formData.addresses[0].province}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione provincia</option>
              {loading && <option>Loading...</option>}
              {error && <option>Error loading provinces</option>}
              {!loading && !error && provinces.map(province => (
                <option key={province.id} value={province.name}>{province.name}</option>
              ))}
            </select>
          </div>

          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="city" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Localidad</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__marker"></span>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                placeholder=""
                value={formData.addresses[0].city}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex gap-1 flex-wrap">
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="street" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Calle / Av</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__marker"></span>
              <input
                id="street"
                name="street"
                type="text"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                placeholder=""
                value={formData.addresses[0].street}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="number" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Número</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__marker"></span>
              <input
                id="number"
                name="number"
                type="number"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style no-spin"
                placeholder=""
                value={formData.addresses[0].number}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex gap-1 flex-wrap">
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="floor" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Piso / Casa</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__marker"></span>
              <input
                id="floor"
                name="floor"
                type="text"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                placeholder=""
                value={formData.addresses[0].floor}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="apartment" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Departamento</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__marker"></span>
              <input
                id="apartment"
                name="apartment"
                type="text"
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                placeholder=""
                value={formData.addresses[0].apartment}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="zipCode" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">CPA</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__marker"></span>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                placeholder=""
                value={formData.addresses[0].zipCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex gap-1 flex-wrap">
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="addressName" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Nombre domicilio</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__marker"></span>
              <input
                id="addressName"
                name="addressName"
                type="text"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                placeholder="Indique un nombre para su domicilio"
                value={formData.addresses[0].addressName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex p-b-1 gap-1 a-items-center j-content-space-between">
          <button type="button" onClick={prevStep} className="btn size_2 white inter-medium f-s-16 m-0 c-004675 W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span className="btn_icon icon__arrow_left"></span>
              <span>Volver</span>
            </div>
          </button>
          <button type="button" onClick={nextStep} className="btn size_2 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span>Continuar</span>
              <span className="btn_icon icon__arrow_right"></span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step2;
