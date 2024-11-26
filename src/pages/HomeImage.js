import React from 'react';
import rofinaImagenInicio from '../assets/img/Home/rofina_imagen_inicio.png';
import '../assets/styles/styles.css';

const HomeImage = () => (
  <article id="inicio_imagen" className="img__container p-2 d-flex flex-column j-content-center a-items-center">
    <img src={rofinaImagenInicio} alt="Rofina Imagen Inicio" />
  </article>
);

export default HomeImage;