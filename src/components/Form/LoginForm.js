import React, { useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import { login, resetPassword } from '../../services/authService.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [resetPasswordMode, setResetPasswordMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Nuevo estado para mostrar/ocultar contraseña
  const navigate = useNavigate();

  useEffect(() => {
    setIsSubmitDisabled(!email || (!password && !resetPasswordMode));
  }, [email, password, resetPasswordMode]);

  useEffect(() => {
    setError(false);
  }, [resetPasswordMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (resetPasswordMode) {
      try {
        const data = await resetPassword(email);
        console.log('Restablecimiento de contraseña exitoso:', data);
        toast.success('Restablecimiento de contraseña realizado con éxito. Verifica tu correo electrónico.');
        setResetPasswordMode(false);
      } catch (err) {
        console.error('Error de restablecimiento de contraseña:', err);
        setError(true);
        toast.error('Error en la recuperación de la contraseña. Inténtalo nuevamente.');
      }
    } else {
      try {
        const data = await login(email, password);
        console.log('Login exitoso:', data);
        // Guarda el usuario en localStorage
        localStorage.setItem('user', JSON.stringify(data));
        setIsAuthenticated(true);
        // Redirige al Dashboard después de un login exitoso
        navigate('/dashboard');
      } catch (err) {
        console.error('Error de login:', err);
        setError(true);
        toast.error('Error de usuario y/o contraseña. Inténtalo nuevamente.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div id="form-inicio" className="d-flex flex-column gap-1 a-items-center j-content-center">
      <HeaderLogo />
      <form className="p-1 bg-ffffff b-r-1 d-flex flex-column gap-1" onSubmit={handleSubmit}>
        <div className="text-field-size-lg d-flex flex-column">
          <label htmlFor="email" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Email</label>
          <div className="input-w-icon d-flex flex-column">
            <span className="leading_icon icon__user"></span>
            <input
              id="email"
              type="email"
              required
              className="f-s-16 inter-regular c-616161 b-r-2 input-style"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {!resetPasswordMode && (
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="passwordInput" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Contraseña</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__key"></span>
              <input
                id="passwordInput"
                type={showPassword ? "text" : "password"} // Cambia el tipo de input según el estado
                required
                className="f-s-16 inter-regular c-616161 b-r-2 input-style"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                id="btnChangePass"
                className={`trailing_icon ${showPassword ? 'icon__eye_crossed' : 'icon__eye'} active`} // Cambia la clase según el estado
                onClick={togglePasswordVisibility} // Llama a la función para cambiar el estado
              ></span>
            </div>
          </div>
        )}
        {!resetPasswordMode && (
          <div>
            <a href="#" onClick={() => setResetPasswordMode(true)} className="link inter-medium c-00907C m-0">Olvidé mi usuario o contraseña</a>
          </div>
        )}
        <div className="d-flex flex-column">
          <button type="submit" disabled={isSubmitDisabled} className="btn size_2 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span>{resetPasswordMode ? 'Restablecer Contraseña' : 'Ingresar'}</span>
            </div>
            <div className="d-flex">
              <span className="btn_icon icon__arrow_right"></span>
            </div>
          </button>
        </div>
      </form>
      {error && (
        <div className="d-flex flex-column a-items-center">
          <div className="toastify-style b-r-0-5 p-0-5">
            <p className="mensaje m-0 inter-regular c-ffffff f-s-14">{resetPasswordMode ? 'Error al restablecer la contraseña' : 'Error de usuario y/o contraseña'}</p>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
