import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import roemmers from '../../assets/img/laboratorios/checkbox_img__roemmers.jpg'
import biopas from '../../assets/img/laboratorios/checkbox_img__biopas.jpg';
import buyanos from '../../assets/img/laboratorios/checkbox_img__buyanor.jpg';
import cepage from '../../assets/img/laboratorios/checkbox_img__cepage.jpg';
import cslBehring from '../../assets/img/laboratorios/checkbox_img__CSL_Behring.jpg';
import cslSeqirus from '../../assets/img/laboratorios/checkbox_img__cslseqirus.jpg';
import dermacare from '../../assets/img/laboratorios/checkbox_img__dermacare.jpg';
import ethicalNutrition from '../../assets/img/laboratorios/checkbox_img__ethical_nutrition.jpg';
import ferring from '../../assets/img/laboratorios/checkbox_img__ferring.jpg';
import finadiet from '../../assets/img/laboratorios/checkbox_img__finadiet.jpg';
import gemaBiotech from '../../assets/img/laboratorios/checkbox_img__gemabiotech.jpg';
import gramon from '../../assets/img/laboratorios/checkbox_img__gramon.jpg';
import maxVision from '../../assets/img/laboratorios/checkbox_img__maxvision.jpg';
import megalabs from '../../assets/img/laboratorios/checkbox_img__megalabs.jpg';
import mundiPharma from '../../assets/img/laboratorios/checkbox_img__mundi_pharma.jpg';
import novoNordisk from '../../assets/img/laboratorios/checkbox_img__novo_nordisk.jpg';
import poen from '../../assets/img/laboratorios/checkbox_img__poen.jpg';
import raffo from '../../assets/img/laboratorios/checkbox_img__raffo.jpg';
import reckitt from '../../assets/img/laboratorios/checkbox_img__reckitt.jpg';
import roche from '../../assets/img/laboratorios/checkbox_img__roche.jpg';
import rofina from '../../assets/img/laboratorios/checkbox_img__Rofina.jpg';
import siegfried from '../../assets/img/laboratorios/checkbox_img__siegfried.jpg';
import sophia from '../../assets/img/laboratorios/checkbox_img__sophia.jpg';
import 'react-toastify/dist/ReactToastify.css';
import ModalAgregarLaboratorio from '../../components/modals/modalLaboratorios/ModalAgregarLaboratorio';
import { fetchLaboratoriesByUser } from '../../services/laboratoryService';
import { useNavigate } from 'react-router-dom';
import { useLaboratory } from '../../contexts/LaboratoryContext';
import ApmDashboard from '../../components/Dashboard/ApmDashboard';
import MedicoDashboard from '../../components/Dashboard/MedicoDashboard';

const laboratoryImages = {
  'Roemmers': roemmers,
  'Biopas': biopas,
  'Buyanos': buyanos,
  'Cepage': cepage,
  'CSL Behring': cslBehring,
  'CSL Seqirus': cslSeqirus,
  'Dermacare': dermacare,
  'Ethical Nutrition': ethicalNutrition,
  'Ferring': ferring,
  'Finadiet': finadiet,
  'Gema Biotech': gemaBiotech,
  'Gramon': gramon,
  'Max Vision': maxVision,
  'Megalabs': megalabs,
  'Mundi Pharma': mundiPharma,
  'Novo Nordisk': novoNordisk,
  'Poen': poen,
  'Raffo': raffo,
  'Reckitt': reckitt,
  'Roche': roche,
  'Rofina': rofina,
  'Siegfried': siegfried,
  'Sophia': sophia
};

function Dashboard() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLaboratory, setSelectedLaboratory] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [pendingLaboratories, setPendingLaboratories] = useState([]);
  const [approvedLaboratories, setApprovedLaboratories] = useState([]);
  const { setSelectedLaboratory: setContextLaboratory } = useLaboratory(); // Renombrado a setContextLaboratory
  const navigate = useNavigate();


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUser(user);
      fetchUserLaboratories(user.userId);
    }
  }, []);

  // Simula el rol 'apm'
  useEffect(() => {
    sessionStorage.setItem('role', 'medico');
  }, []);

  const role = sessionStorage.getItem('role');

  const fetchUserLaboratories = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const labs = await fetchLaboratoriesByUser(userId, token);

      setPendingLaboratories(labs.filter(lab => lab.status === "PendingApproval"));
      setApprovedLaboratories(labs.filter(lab => lab.status === 'Approved'));

    } catch (error) {
      console.error('Error fetching laboratories:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLaboratoryChange = (e) => {
    setSelectedLaboratory(e.target.value);
  };

  const refreshLaboratories = () => {
    if (user) {
      fetchUserLaboratories(user.userId);
    }
  };

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  const getImageSrc = (name) => {
    return laboratoryImages[name] || 'default_image_path'; // Define una imagen por defecto si es necesario
  };

  const handleLaboratoryClick = (lab) => {
    const imageUrl = laboratoryImages[lab.laboratoryName] || 'default_image_path';
    setContextLaboratory({ id: lab.laboratoryId, name: lab.laboratoryName, imageUrl }); // Usando el nombre renombrado
    navigate('/store');
  };


  return (
    <div className="dashboard-container" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {role === 'apm' && <ApmDashboard />}
      {role === 'medico' && user && (
        <MedicoDashboard
          pendingLaboratories={pendingLaboratories}
          approvedLaboratories={approvedLaboratories}
          getImageSrc={getImageSrc}
          handleLaboratoryClick={handleLaboratoryClick}
          openModal={openModal}
        />
      )}
      <ModalAgregarLaboratorio
        isOpen={isModalOpen}
        onClose={closeModal}
        onLaboratoryChange={handleLaboratoryChange}
        selectedLaboratory={selectedLaboratory}
        onSuccess={refreshLaboratories} // Add this line
      />
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
