import React, { useState } from 'react';
import LoginForm from '../components/Form/LoginForm';
import RegisterForm from '../components/Form/RegisterForm'
import rofina_imagen_inicio from '../assets/img/Home/rofina_imagen_inicio.png';

function MainContainer({ handleModalToggle, setIsAuthenticated }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="main__container__login bg-292929 b-r-t-l-2 b-r-t-r-2">
      <section className="main__container__login__section d-flex flex-row flex-wrap">
        {showLogin ? (
          <article id="inicio_imagen" className="img__container p-2 d-flex flex-column j-content-center a-items-center">
            <img src={rofina_imagen_inicio} alt="" />
          </article>
        ) : null}
        <article className="info__container d-flex flex-column c-ffffff p-2 gap-1">
          <nav className="form__nav d-flex flex-row gap-0 j-content-end">
            <li
              id="tabInicio"
              className={`tab ${showLogin ? 'active' : ''} f-s-16 inter-regular`}
              onClick={() => setShowLogin(true)}
            >
              Inicio
            </li>
            <li
              id="tabRegistro"
              className={`tab ${!showLogin ? 'active' : ''} f-s-16 inter-regular`}
              onClick={() => setShowLogin(false)}
            >
              Registro
            </li>
          </nav>
          <div className="form__container d-flex flex-column a-items-center j-content-center gap-1">
            {showLogin ? (
              <LoginForm handleModalToggle={handleModalToggle} setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <RegisterForm setShowLogin={setShowLogin} />
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default MainContainer;
