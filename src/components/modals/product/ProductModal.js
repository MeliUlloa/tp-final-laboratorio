import React from 'react';
import './ProductModal.css'; // Mantén tu archivo de estilos personalizado

const ProductModal = ({ isOpen, product, onClose }) => {
  return (
    <div className={`modal modal-product modal-fixed-scroll modal-lg p-fixed p-t-2 p-s-2 p-e-2 p-b-0 d-flex flex-column j-content-end ${isOpen ? 'active' : ''}`}>
      <div className="modal-dialog custom-modal-dialog d-flex flex-column j-content-end" style={{ marginBottom: '1%' }}>
        <div className="modal-content custom-modal-content d-flex flex-column a-items-bottom b-r-t-l-0-5 b-r-t-r-0-5 gap-1" style={{ marginRight: '70%' }}>
          <div className="modal-header custom-modal-header d-flex gap-0-5 a-items-center">
            <a href="#" onClick={onClose} className="link d-flex a-items-center gap-0-5">
              <span className="icon icon__arrow__back"></span>
              <h1 className="modal-title link c-616161 f-s-20 inter-medium link m-0">
                {product.name}
              </h1>
            </a>
          </div>
          <div className="modal-body custom-modal-body">
            <div className="info d-flex flex-column gap-1">
              <picture>
                <img src={product.imageUrl} alt={product.name} />
              </picture>
              <p className="inter-regular">{product.description}</p>
              <p className="inter-regular"><span>Principio activo:</span> {product.activeIngredientName}</p>
            </div>
          </div>
          <div className="modal-footer custom-modal-footer d-flex flex-column p-t-1">
            <div className="info d-flex flex-row gap-1 a-items-center j-content-end">
              <div>
                <a href={product.prospectLink} target="_blank" rel="noopener noreferrer" className="btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                  <div className="flex_info d-flex flex-row gap-1 a-items-center">
                    <span className="white_filled">Ver prospecto</span>
                  </div>
                </a>
              </div>
              <div className="calltoaction">
                <button className="btnShop btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                  <div className="flex_info d-flex flex-row gap-1 a-items-center">
                    <span className="white_filled">Agregar</span>
                    <span className="btn_icon icon__shopping"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
