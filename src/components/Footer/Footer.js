// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-292929 b-r-b-l-2 b-r-b-r-2 c-ffffff d-flex flex-row a-items-center j-content-between p-1 flex-wrap gap-1">
      <div className="dir d-flex gap-0-5 flex-column">
        <p className="m-0 inter-regular c-ffffff f-s-16">Fray Justo Sarmiento 2350 - CP B1636AKI - Olivos, Buenos Aires</p>
        <div className="d-flex flex-row gap-1 flex-wrap">
          <p className="m-0 inter-regular c-ffffff f-s-16">info@rofina.com.ar</p>
          <p className="m-0 inter-regular c-ffffff f-s-16">011-4344-9500</p>
        </div>
      </div>
      <div className="d-flex gap-0-5 a-items-center flex-wrap">
        <a href="mailto:info@rofina.com.ar" className="btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-between">
          <div className="flex_info d-flex flex-row gap-1 a-items-center">
            <span className="btn_icon icon__envelopment"></span>
            <span className="white_filled">Contactanos</span>
          </div>
        </a>
        <a href="" className="icono_redes icono__linkedin"></a>
        <a href="" className="icono_redes icono__facebook"></a>
        <a href="" className="icono_redes icono__instagram"></a>
      </div>
    </footer>
  );
}

export default Footer;