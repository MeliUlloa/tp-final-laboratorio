import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import LoginForm from '../components/Form/LoginForm';
import Dashboard from '../pages/Dashboard/Dashboard';
import MyAccount from '../pages/MyAccount/MyAccount';
import Store from '../pages/Store/Store';
import Cart from '../pages/Cart/Cart';
import OrdersPage from '../pages/Order/OrdersPage';
import PrivateRoute from './PrivateRoute';

export default function Routing({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}>
            <Route
              index
              element={<LoginForm setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="dashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="myaccount"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <MyAccount />
                </PrivateRoute>
              }
            />
            <Route
              path="/store"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Store />
                </PrivateRoute>
              }
            />
            {/* Añade la ruta para el carrito */}
            <Route
              path="/carrito"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Cart />
                </PrivateRoute>
              }
            />
            {/* Añade la ruta para OrdersPage */}
            <Route
              path="/orders"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <OrdersPage />
                </PrivateRoute>
              }
            />
            {/* Añade aquí otras rutas según sea necesario */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
