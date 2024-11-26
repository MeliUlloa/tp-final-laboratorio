import React from 'react';

function Step1({ nextStep, formData, updateFormData }) {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div id="formRegistro__1" className="form form__paso__1 d-flex flex-column gap-1 active w-100 j-content-center a-items-center">
      <div className="progress-box d-flex flex-column flex-auto">
        <div className="progress">
          <div className="progress-state state-25"></div>
        </div>
      </div>
      <form className="d-flex flex-column p-1 bg-ffffff b-r-1 d-flex flex-column gap-1">
        <div className="d-flex j-content-between flex-wrap">
          <div className="title_flex">
            <h6 className="m-0 f-s-18 inter-medium c-004675">Datos personales</h6>
          </div>
        </div>
        <div className="d-flex gap-1 flex-wrap">
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="name" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Nombre</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__user"></span>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="lastname" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Apellido</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__user"></span>
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="d-flex j-content-between flex-wrap">
          <div className="title_flex">
            <h6 className="m-0 f-s-16 inter-regular c-004675">Documento</h6>
          </div>
        </div>
        <div className="d-flex gap-1 flex-wrap">
          <div className="select-box d-flex flex-column">
            <label htmlFor="tipo" className="m-0 f-s-16 inter-regular c-004675 p-s-1 p-e-1 p-t-0-5 p-b-0-5">Tipo</label>
            <span className="icon icon__id_badge"></span>
            <select
              id="tipo"
              name="tipo"
              className="select-style w-icon b-r-2"
              value={formData.tipo}
              onChange={handleChange}
            >
              <option value="DNI">DNI</option>
              <option value="CUIT">CUIT</option>
              <option value="CUIL">CUIL</option>
            </select>
          </div>
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="numero" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Número</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__id_badge"></span>
              <input
                id="numero"
                name="numero"
                type="number"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style no-spin"
                value={formData.numero}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="d-flex gap-1 flex-wrap">
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="fechaNacimiento" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Fecha de nacimiento</label>
            <div className="inputDate-style d-flex flex-column">
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                required
                className="f-s-16 inter-regular c-616161 b-r-2"
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="select-box d-flex flex-column">
            <label htmlFor="genero" className="m-0 f-s-16 inter-regular c-004675 p-s-1 p-e-1 p-t-0-5 p-b-0-5">Género</label>
            <span className="icon icon__id_badge"></span>
            <select
              id="genero"
              name="genero"
              className="select-style w-icon b-r-2"
              value={formData.genero}
              onChange={handleChange}
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>
        <div className="d-flex p-b-1 gap-1 a-items-center j-content-end">
          <button type="button" onClick={nextStep} className="btn size_2 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span>Continuar</span>
            </div>
            <div className="d-flex">
              <span className="btn_icon icon__arrow_right"></span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step1;
