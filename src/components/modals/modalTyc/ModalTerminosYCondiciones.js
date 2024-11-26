import React from 'react';
import './modal.css';

function ModalTerminosYCondiciones({ handleModalToggle }) {
  return (
    <div className="modal show">
      <div className="modal-content d-flex flex-column a-items-bottom b-r-t-l-0-5 b-r-t-r-0-5 gap-1">
        <div className="modal-header d-flex gap-0-5 a-items-center">
          <a id="btnClosemodalTerminosYCondiciones" className="link d-flex a-items-center gap-0-5" onClick={handleModalToggle}>
            <span className="icon icon__arrow__back"></span>
            <h1 className="modal-title link c-616161 f-s-20 inter-medium link m-0">Términos y condiciones</h1>
          </a>
        </div>
        <div className="modal-body">
          <div className="d-flex flex-column gap-1">
            <h2 className="f-s-18 c-616161 inter-medium m-0">¿Qué es Lorem Ipsum?</h2>
            <p className="f-s-16 c-616161 inter-regular m-0">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
            <h2 className="f-s-18 c-616161 inter-medium m-0">¿De dónde viene?</h2>
            <p className="f-s-16 c-616161 inter-regular m-0">
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raíces en una pieza clásica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera más de 2000 años de antigüedad. Richard McClintock, un profesor de Latín de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consectetur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicerón, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera línea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una línea en la sección 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTerminosYCondiciones;
