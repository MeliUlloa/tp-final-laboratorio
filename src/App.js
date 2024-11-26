import React, { useState, useEffect } from 'react';
import Routing from './routing/Routing';
import './assets/styles/styles.css';
import { LaboratoryProvider } from './contexts/LaboratoryContext';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';  // Importar el Provider de react-redux
import { reduxStore } from './redux/reduxStore';  // Importar el reduxStore

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Provider store={reduxStore}>
      <LaboratoryProvider>
        <Routing isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      </LaboratoryProvider>
    </Provider>
  );
}

export default App;
