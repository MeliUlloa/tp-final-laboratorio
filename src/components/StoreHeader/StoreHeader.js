import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './StoreHeader.css';
import { useLaboratory } from '../../contexts/LaboratoryContext';

const StoreHeader = ({ cartItemsCount }) => {
  const navigate = useNavigate(); // Hook para navegar programáticamente
  const location = useLocation(); // Hook para obtener la ubicación actual
  const { selectedLaboratory } = useLaboratory(); // Accede al laboratorio seleccionado desde el contexto

  const handleCartClick = () => {
    navigate('/carrito'); // Redirige al carrito
  };

  const handleProductsClick = () => {
    navigate('/store'); // Redirige a la tienda
  };

  return (
    <header className="header d-flex flex-column gap-1">
      {location.pathname === '/carrito' ? (
        <div className="Lab-header d-flex flex-row j-content-space-between p-2 b-r-2">
          <div className="d-flex flex-row gap-1 a-items-center">
            <div className="Lab__logo">
              <img src={selectedLaboratory.imageUrl} alt={`Logo de ${selectedLaboratory.name}`} />
            </div>
          </div>
          <div className="d-flex flex-row gap-1 a-items-center flex-wrap j-content-center">
            <div>
              <button
                onClick={handleProductsClick}
                className="btn dropBtn size_1 white inter-medium f-s-14 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
              >
                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                  <span className="btn_icon icon__arrow_left"></span>
                  <span className="white_filled">Productos</span>
                </div>
              </button>
            </div>
            <div>
              <button className="btn size_1 white inter-medium f-s-14 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                  <span className="white_filled">Novedades</span>
                </div>
              </button>
            </div>
            <div>
              <button className="btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                <div className="flex_info d-flex flex-row a-items-center">
                  <span className="btn_icon icon__shopping"></span>
                  <span className="quantity c-00907C f-s-12 p-s-0-5">{cartItemsCount}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="Lab-header d-flex flex-row j-content-space-between p-2 b-r-2">
          <div className="Lab__logo">
            <img src={selectedLaboratory.imageUrl} alt={`Logo de ${selectedLaboratory.name}`} />
          </div>
          <div className="d-flex flex-row gap-1 a-items-center">
            <div>
              <button className="btn size_1 white inter-medium f-s-14 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                  <span className="white_filled">Novedades</span>
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={handleCartClick}
                className="btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
              >
                <div className="flex_info d-flex flex-row a-items-center">
                  <span className="btn_icon icon__shopping"></span>
                  <span className="quantity c-00907C f-s-12 p-s-0-5">{cartItemsCount}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default StoreHeader;
