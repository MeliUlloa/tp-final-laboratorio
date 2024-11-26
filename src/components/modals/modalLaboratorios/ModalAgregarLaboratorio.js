import React, { useEffect, useState } from 'react';
import { fetchLaboratories, createUserDetailLaboratory } from '../../../services/laboratoryService';
import { toast } from 'react-toastify';

const ModalAgregarLaboratorio = ({ isOpen, onClose, onLaboratoryChange, selectedLaboratory, onSuccess }) => {
  const [laboratories, setLaboratories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLaboratories, setFilteredLaboratories] = useState([]);

  useEffect(() => {
    const loadLaboratories = async () => {
      try {
        const laboratoriesData = await fetchLaboratories();
        setLaboratories(laboratoriesData);
        setFilteredLaboratories(laboratoriesData); // Initialize filtered laboratories with all laboratories
      } catch (error) {
        console.error('Error fetching laboratories:', error);
      }
    };

    if (isOpen) {
      loadLaboratories();
    }
  }, [isOpen]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const results = laboratories.filter(lab =>
      lab.name.toLowerCase().includes(term)
    );
    setFilteredLaboratories(results);
  };

  const handleAddLaboratory = async () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const token = localStorage.getItem('token');

      try {
        await createUserDetailLaboratory(user.userId, selectedLaboratory, token);
        toast.success('Laboratorio agregado con éxito');
        onClose(); // Close the modal
        onSuccess(); // Refresh the laboratories list
      } catch (error) {
        toast.error('Error al agregar el laboratorio');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-content d-flex flex-column a-items-bottom b-r-t-l-0-5 gap-1">
        <div className="modal-header d-flex gap-0-5 a-items-center">
          <a href="#" onClick={onClose} className="link d-flex a-items-center gap-0-5">
            <span className="icon icon__arrow__back"></span>
            <h1 className="modal-title link c-616161 f-s-20 inter-medium link m-0">Agregar laboratorios</h1>
          </a>
        </div>
        <div className="modal-body">
          <div className="d-flex flex-column gap-1">
            <div className="text-field-size-lg d-flex flex-column gap-1">
              <label htmlFor="mySearch" className="c-004675 f-s-16 inter-regular">Buscar</label>
              <div className="input-w-icon d-flex flex-column">
                <input
                  type="search"
                  id="mySearch"
                  placeholder="Ingrese un laboratorio"
                  title="Seleccione un laboratorio"
                  className="input-search-style p-1 b-r-2 inter-regular c-616161"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <ul id="myMenu" className="input-radio-container">
              {filteredLaboratories.map((lab) => (
                <li key={lab.id}>
                  <label htmlFor={lab.id} className="inter-regular c-616161 p-s-1 p-e-1 p-t-0-5 p-b-0-5 b-r-2">
                    <input
                      id={lab.id}
                      type="radio"
                      name="laboratorios"
                      value={lab.id}
                      className="inputRadioBtn"
                      onChange={onLaboratoryChange}
                    />
                    <span className="icon"></span> {lab.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="modal-footer d-flex flex-column p-t-1">
          <button
            id="AddLab"
            type="submit"
            className="btn size_2 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1"
            disabled={!selectedLaboratory}
            onClick={handleAddLaboratory}
          >
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span>Agregar</span>
            </div>
            <div className="d-flex">
              <span className="btn_icon icon__arrow_right"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAgregarLaboratorio;
