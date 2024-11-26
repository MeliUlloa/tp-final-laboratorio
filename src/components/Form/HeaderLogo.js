// src/components/HeaderLogo.js
import React from 'react';
import rofinalogohorizontalblanco from '../../assets/icons/rofina-logo-horizontal-blanco.svg';

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <div className="logo_rofina">
        <img src={rofinalogohorizontalblanco} alt="Logo" />
      </div>
      <div>
        <h1 className="inter-medium f-s-20 c-ffffff m-0">Muestras médicas</h1>
      </div>
    </div>
  );
};

export default HeaderLogo;
