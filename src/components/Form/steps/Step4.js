import React, { useState } from 'react';
import ModalTerminosYCondiciones from '../../modals/modalTyc/ModalTerminosYCondiciones';

function Step4({ prevStep, formData, updateFormData, handleSubmit }) {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleModalToggle = () => setShowModal(!showModal);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const togglePasswordRepeatVisibility = () => {
    setShowPasswordRepeat((prevShowPasswordRepeat) => !prevShowPasswordRepeat);
  };

  return (
    <div id="formRegistro__4" className="form form__paso__4 d-flex flex-column gap-1 active w-100 j-content-center a-items-center">
      <div className="progress-box d-flex flex-column flex-auto">
        <div className="progress">
          <div className="progress-state state-100"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="d-flex flex-column p-1 bg-ffffff b-r-1 d-flex flex-column gap-1">
        <div className="d-flex j-content-between flex-wrap">
          <div className="title_flex">
            <h6 className="m-0 f-s-18 inter-medium c-004675">Contacto</h6>
          </div>
          <div className="tooltipContacto tooltip_btn icono_tooltip icono__info">
            <div id="" className="tooltip_text p-0-5 bg-F9F9F9 b-r-1">
              <p className="inter-regular f-s-12 c-616161 m-0">Configure los datos de contacto para notificación del estado de envío</p>
            </div>
          </div>
        </div>

        <div className="d-flex gap-1 flex-wrap">
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="email" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Email</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__envelope"></span>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                value={formData.email || ''}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="phoneNumber" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Celular</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__smartphone"></span>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style no-spin"
                value={formData.phoneNumber || ''}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex j-content-between flex-wrap">
          <div className="title_flex">
            <h6 className="m-0 f-s-16 inter-medium c-004675">Datos de acceso</h6>
          </div>
        </div>

        <div className="d-flex gap-1 flex-wrap">
          <div className="box-password d-flex flex-column gap-0-5">
            <div className="text-field-size-lg d-flex flex-column">
              <label htmlFor="password" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Contraseña</label>
              <div className="input-w-icon d-flex flex-column">
                <span className="leading_icon icon__key"></span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                  autoComplete="off"
                  spellCheck="false"
                  autoCapitalize="off"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Debe contener mínimo 8 caracteres, al menos un número, un carácter especial, una letra mayúscula y una minúscula."
                  value={formData.password || ''}
                  onChange={handleChange}
                />
                <span
                  id="btnToggleInput"
                  className={`trailing_icon icon__eye${showPassword ? '_crossed' : ''} active`}
                  onClick={togglePasswordVisibility}
                ></span>
              </div>
            </div>
            <div className="password-info">
              <div id="message" className="flex-column card_text p-0-5 b-r-0-5 gap-0-5 d-none">
                <h6 className="inter-medium f-s-14 c-616161 m-0">Su contraseña debe contener al menos:</h6>
                <p id="letter" className="invalid inter-regular f-s-14 m-0 p-t-0-5 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Una letra minúscula</span></p>
                <p id="capital" className="invalid inter-regular f-s-14 m-0 p-t-0 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Una letra mayúscula</span></p>
                <p id="number" className="invalid inter-regular f-s-14 m-0 p-t-0 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Un número</span></p>
                <p id="length" className="invalid inter-regular f-s-14 m-0 p-t-0 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Mínimo 8 caracteres</span></p>
                <p id="specialCh" className="invalid inter-regular f-s-14 m-0 p-t-0 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Un caracter especial</span></p>
              </div>
            </div>
          </div>
          <div className="box-password d-flex flex-column gap-0-5">
            <div className="text-field-size-lg d-flex flex-column">
              <label htmlFor="passwordRepeat" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Repetir contraseña</label>
              <div className="input-w-icon d-flex flex-column">
                <span className="leading_icon icon__key"></span>
                <input
                  id="passwordRepeat"
                  name="passwordRepeat"
                  type={showPasswordRepeat ? "text" : "password"}
                  required
                  className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                  autoComplete="off"
                  spellCheck="false"
                  autoCapitalize="off"
                  value={formData.passwordRepeat || ''}
                  onChange={handleChange}
                />
                <span
                  id="btnToggleInput2"
                  className={`trailing_icon icon__eye${showPasswordRepeat ? '_crossed' : ''} active`}
                  onClick={togglePasswordRepeatVisibility}
                ></span>
              </div>
            </div>
            <div className="password-info">
              <div id="messageR" className="flex-column card_text p-0-5 b-r-0-5 gap-0-5 d-none">
                <h6 className="inter-medium f-s-14 c-616161 m-0">Su contraseña debe contener al menos:</h6>
                <p id="letterR" className="invalid inter-regular f-s-14 m-0 p-t-0-5 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Una letra minúscula</span></p>
                <p id="capitalR" className="invalid inter-regular f-s-14 m-0 p-t-0 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Una letra mayúscula</span></p>
                <p id="numberR" className="invalid inter-regular f-s-14 m-0 p-t-0 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Un número</span></p>
                <p id="lengthR" className="invalid inter-regular f-s-14 m-0 p-t-0 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Mínimo 8 caracteres</span></p>
                <p id="specialChR" className="invalid inter-regular f-s-14 m-0 p-t-0 p-e-0-5 p-b-0-25 p-s-1"><span className="c-616161">Un caracter especial</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-0-5">
          <p className="inter-regular f-s-16 c-616161">
            Al registrarse acepta los <a id="btnModalTerminosYCondiciones" onClick={handleModalToggle} className="inter-medium c-00907C link">Términos y condiciones</a>
          </p>
        </div>

        <div className="btn-container d-flex p-b-1 gap-1 j-content-space-between">
          <button type="button" onClick={prevStep} className="btn size_2 white inter-medium f-s-16 m-0 c-004675 W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span className="btn_icon icon__arrow_left"></span>
              <span>Volver</span>
            </div>
          </button>
          <button type="submit" className="btn size_2 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span>Crear cuenta</span>
            </div>
            <div className="d-flex">
              <span className="btn_icon icon__arrow_right"></span>
            </div>
          </button>
        </div>
      </form>

      {showModal && (
        <ModalTerminosYCondiciones handleModalToggle={handleModalToggle} />
      )}
    </div>
  );
}

export default Step4;
