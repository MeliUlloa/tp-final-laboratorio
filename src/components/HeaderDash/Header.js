import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import rofinalogohorizontal from '../../../src/assets/icons/rofina-logo-horizontal-color.svg';

const Header = ({ handleLogout }) => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isOrdersMenuOpen, setIsOrdersMenuOpen] = useState(false); // Estado para controlar el menú de "Pedidos"
  const navigate = useNavigate();

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const toggleOrdersMenu = () => {
    setIsOrdersMenuOpen(!isOrdersMenuOpen);
  };


  const handleLogoutClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    sessionStorage.clear(); // Limpia el localStorage
    navigate('/'); // Redirige a la página de inicio
    window.location.reload(); // Forza una recarga de la página
  };

  return (
    <header className="header d-flex flex-column gap-1" style={{ marginTop: '20px' }}>
      <div className="Rofina-header d-flex a-items-center j-content-space-between p-b-1">
        <div className="logo">
          <Link to="/dashboard" className="d-flex logo">
            <img src={rofinalogohorizontal} alt="Logo Rofina" />
          </Link>
        </div>
        <div className="my-nav d-flex gap-1 a-items-center">
          <div className="d-flex flex-row gap-1">
            <div className="dropdown d-flex flex-column">
              <button
                className={`btn dropBtn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between ${isNotificationsOpen ? 'active' : ''}`}
                onClick={toggleNotifications}
              >
                <div className="flex_info d-flex flex-row a-items-center">
                  <span className="btn_icon icon__notificacion"></span>
                </div>
              </button>
              {isNotificationsOpen && (
                <ul className="m-0 p-0-5 b-r-1 dropMenu notifications active">
                  <li className="option unread">
                    <a href="#" className="">
                      <p className="title">El estado de su pedido Roe123456 ha cambiado</p>
                      <p className="description">Pedido entregado.</p>
                      <p className="date">23/07/24</p>
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <button id="btnMenuInicio" className="btn btn-menu size_1 white inter-medium f-s-14 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between">
                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                  <span className="btn_icon icon__menu__burguer"></span>
                </div>
              </button>
            </div>
          </div>
          <div id="menu-header-inicio" className="gap-1 flex-row btn-group">
            <div className="dropdown d-flex flex-column">
              <button
                className="btn dropBtn size_1 white inter-medium f-s-14 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                onClick={toggleAccountMenu}
              >
                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                  <span className="btn_icon icon__user"></span>
                  <span className="white_filled">Mi cuenta</span>
                </div>
                <span className={`btn_icon icon__angle_small_down ${isAccountMenuOpen ? 'active' : ''}`}></span>
              </button>
              {isAccountMenuOpen && (
                <ul className={`m-0 p-0-5 b-r-1 dropMenu d-flex flex-column ${isAccountMenuOpen ? 'active' : ''}`}>
                  <li className="option">
                    <Link onClick={toggleAccountMenu} to="/myaccount" className="inter-regular c-616161 link f-s-14">Mi cuenta</Link>
                  </li>
                  <li className="option">
                    <a href="#" onClick={handleLogoutClick} className="inter-regular c-616161 link f-s-14">Cerrar sesión</a>
                  </li>
                </ul>
              )}
            </div>
            <div className="dropdown d-flex flex-column">
              <button
                id="btnDropPedidos"
                className="btn dropBtn size_1 white inter-medium f-s-14 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between"
                onClick={toggleOrdersMenu}
              >
                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                  <span className="btn_icon icon__pedidos"></span>
                  <span className="white_filled">Pedidos</span>
                </div>
                <span className={`btn_icon icon__angle_small_down ${isOrdersMenuOpen ? 'active' : ''}`}></span>
              </button>
              {isOrdersMenuOpen && (
                <ul className={`m-0 p-0-5 b-r-1 dropMenu d-flex flex-column ${isOrdersMenuOpen ? 'active' : ''}`}>
                  <li className="option">
                    <Link onClick={toggleOrdersMenu} to="/orders" className="inter-regular c-616161 link f-s-14">Mis pedidos</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
