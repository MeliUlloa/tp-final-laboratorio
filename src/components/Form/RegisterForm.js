import React, { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import HeaderLogo from './HeaderLogo';
import { register } from '../../services/authService';
import { toast } from 'react-toastify';

function RegisterForm({ setShowLogin }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    tipo: 'DNI',
    numero: '',
    fechaNacimiento: '',
    genero: 'Masculino',
    career: '',
    licenseType: 'Nacional',
    licenseNumber: '',
    phoneNumber: '',
    laboratoryIds: [],
    specialtyIds: [],
    addresses: [
      {
        province: '',
        city: '',
        street: '',
        number: '',
        floor: '',
        apartment: '',
        zipCode: '',
        addressName: ''
      }
    ]
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const updateAddressData = (index, data) => {
    const newAddresses = [...formData.addresses];
    newAddresses[index] = { ...newAddresses[index], ...data };
    setFormData((prev) => ({ ...prev, addresses: newAddresses }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Data Submitted: ', formData);
    try {
      const response = await register(formData);
      toast.success('Usuario Registrado con Exito!');
      console.log('Registration successful:', response);
      setShowLogin(true); // Mostrar formulario de login después del registro exitoso
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Falló el registro. Inténtalo de nuevo.');
    }
  };

  return (
    <div id="form-registro" className="d-flex flex-column gap-1 flex-auto w-100 a-items-center j-content-center">
      <HeaderLogo />
      {currentStep === 1 && (
        <Step1
          nextStep={nextStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {currentStep === 2 && (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          updateFormData={updateFormData}
          updateAddressData={updateAddressData}
        />
      )}
      {currentStep === 3 && (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {currentStep === 4 && (
        <Step4
          prevStep={prevStep}
          formData={formData}
          handleSubmit={handleSubmit}
          updateFormData={updateFormData}
        />
      )}
    </div>
  );
}

export default RegisterForm;
