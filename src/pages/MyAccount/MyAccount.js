import React, { useEffect } from 'react';
import Header from '../../components/HeaderDash/Header';
import HeaderSection from './HeaderSection';
import PersonalInfo from './Parts/PersonalInfo';
import ContactInfo from './Parts/ContactInfo';
import ProfessionalInfo from './Parts/Professionalnfo/ProfessionalInfo';
import AddressInfo from './Parts/AddressInfo';
import FooterMyAccount from './Footer/FooterMyAccount';

function MyAccount({ handleLogout }) {

  // Simula el rol 'apm'
  useEffect(() => {
    sessionStorage.setItem('role', 'medico');
  }, []);

  // Obtén el rol del session storage
  const role = sessionStorage.getItem('role');

  return (
    <div className="main__container__mi__cuenta">
      <div className="d-flex flex-column gap-1 p-t-1 p-b-1">
        <HeaderSection />
        <div id="toastBox"></div>
        <div className="panel-container d-flex p-s-1 p-e-1 gap-1 flex-wrap">
          <div className="d-flex w-100">
            <PersonalInfo />
            <ContactInfo />
          </div>
          {role !== 'apm' && (
            <div className="d-flex w-100">
              <ProfessionalInfo />
              <AddressInfo />
            </div>
          )}
        </div>
      </div>
      <FooterMyAccount /> {/* Usa el nuevo componente */}
    </div>
  );
}

export default MyAccount;
