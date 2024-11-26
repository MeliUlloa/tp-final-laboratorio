import React, { useState, useEffect } from 'react';
import Header from '../components/HeaderDash/Header';
import Footer from '../components/Footer/Footer';
import MainContainer from './MainContainer';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout({ isAuthenticated, setIsAuthenticated }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario está autenticado y está en la raíz, redirigir a /dashboard
    if (isAuthenticated && window.location.pathname === '/') {
      navigate('/dashboard');
    }

    // Si el usuario no está autenticado y está en una ruta protegida, redirigir a /
    if (!isAuthenticated && window.location.pathname !== '/') {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className={isAuthenticated ? "body-config body-dashboard" : "body-config body-home gradient-rofina-90 p-2"}>
      {isAuthenticated && <Header handleLogout={handleLogout} />} {/* Header solo si está autenticado */}
      {isAuthenticated ? (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
          <Outlet /> {/* Aquí se renderizan las rutas anidadas */}
        </div>
      ) : (
        <MainContainer handleModalToggle={handleModalToggle} setIsAuthenticated={setIsAuthenticated} />
      )}
      {!isAuthenticated && <Footer />} {/* Footer solo si no está autenticado */}
    </div>
  );
}

export default Layout;
