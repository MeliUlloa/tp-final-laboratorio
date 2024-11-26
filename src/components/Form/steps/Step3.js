import React, { useState, useEffect } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { fetchEspecialidades } from '../../../services/specialtyService';
import { fetchLaboratories } from '../../../services/laboratoryService';

function Step3({ nextStep, prevStep, formData, updateFormData }) {
  const [carrera, setCarrera] = useState(formData.career || '');
  const [selectedEspecialidades, setSelectedEspecialidades] = useState(formData.specialtyIds || []);
  const [especialidades, setEspecialidades] = useState([]);
  const [laboratories, setLaboratories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEspecialidades = async () => {
      try {
        const especialidadesData = await fetchEspecialidades();
        const formattedData = especialidadesData.map(item => ({
          label: item.name,
          value: item.id
        }));
        setEspecialidades(formattedData);
      } catch (error) {
        console.error('Failed to fetch especialidades:', error);
      }
    };

    const loadLaboratories = async () => {
      try {
        const laboratoriesData = await fetchLaboratories();
        setLaboratories(laboratoriesData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadEspecialidades();
    loadLaboratories();
  }, []);

  const handleCarreraChange = (e) => {
    const { value } = e.target;
    setCarrera(value);
    updateFormData({ career: value });
  };

  const handleEspecialidadesChange = (e) => {
    setSelectedEspecialidades(e.value);
    updateFormData({ specialtyIds: e.value });
  };

  const handleMatriculaTipoChange = (e) => {
    const { value } = e.target;
    updateFormData({ licenseType: value });
  };

  const handleMatriculaNumeroChange = (e) => {
    const { value } = e.target;
    updateFormData({ licenseNumber: value });
  };

  const handleLaboratorioChange = (e) => {
    const { value } = e.target;
    updateFormData({ laboratoryId: value });
    updateFormData({ laboratoryIds:  [Number(value)] });
  };

  return (
    <div id="formRegistro__3" className="form form__paso__3 d-flex flex-column gap-1 active w-100 j-content-center a-items-center">
      <div className="progress-box d-flex flex-column flex-auto">
        <div className="progress">
          <div className="progress-state state-75"></div>
        </div>
      </div>
      <form className="d-flex flex-column p-1 bg-ffffff b-r-1 d-flex flex-column gap-1">
        <div className="d-flex j-content-between flex-wrap">
          <div className="title_flex">
            <h6 className="m-0 f-s-18 inter-medium c-004675">Datos profesionales</h6>
          </div>
          <div>
            <div className="tooltipDatosProf tooltip_btn icono_tooltip icono__info">
              <div className="tooltip_text p-0-5 bg-F9F9F9 b-r-1">
                <p className="inter-regular f-s-12 c-616161 m-0">This platform is for healthcare professionals only. This data is requested to verify that your profession is in the field.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-1 flex-wrap">
          <div className={`select-box d-flex flex-column ${carrera === 'medicina' ? 'medicina' : ''}`}>
            <label htmlFor="selectCarrera" className="m-0 f-s-16 inter-regular c-004675 p-s-1 p-e-1 p-t-0-5 p-b-0-5">Carrera / Rama</label>
            <span className="icon icon__academy"></span>
            <select name="career" id="selectCarrera" className="select-style w-icon b-r-2" value={carrera} onChange={handleCarreraChange}>
              <option value=""></option>
              <option value="medicina">Medicina</option>
              <option value="odontologia">Odontología</option>
            </select>
          </div>
          {carrera === 'medicina' && (
            <div className="select-box d-flex flex-column w-100">
              <label htmlFor="selectEspecialidad" className="m-0 f-s-16 inter-regular c-004675 p-s-1 p-e-1 p-t-0-5 p-b-0-5">Especialidad</label>
              <span className="icon icon__academy"></span>
              <MultiSelect
                id="selectEspecialidad"
                value={selectedEspecialidades}
                options={especialidades}
                onChange={handleEspecialidadesChange}
                className="select-style w-icon b-r-2"
                placeholder="Seleciona Especialidad"
                display="chip"
              />
            </div>
          )}
        </div>

        <div className="d-flex j-content-between flex-wrap">
          <div className="title_flex">
            <h6 className="m-0 f-s-16 inter-medium c-004675">Identificación profesional</h6>
          </div>
        </div>

        <div className="d-flex gap-1 flex-wrap">
          <div className="select-box d-flex flex-column">
            <label htmlFor="licenseType" className="m-0 f-s-16 inter-regular c-004675 p-s-1 p-e-1 p-t-0-5 p-b-0-5">Matrícula Tipo</label>
            <span className="icon icon__id_badge"></span>
            <select name="licenseType" id="licenseType" className="select-style w-icon b-r-2" value={formData.licenseType} onChange={handleMatriculaTipoChange}>
              <option value="Nacional">Nacional</option>
              <option value="Provincial">Provincial</option>
            </select>
          </div>
          <div className="text-field-size-lg d-flex flex-column">
            <label htmlFor="licenseNumber" className="c-004675 f-s-16 inter-regular p-s-1 p-e-1 p-t-0-5 p-b-0-5">Matrícula número</label>
            <div className="input-w-icon d-flex flex-column">
              <span className="leading_icon icon__id_badge"></span>
              <input id="licenseNumber" name="licenseNumber" type="number" required className="f-s-16 inter-regular c-616161 b-r-2 input-style no-spin" value={formData.licenseNumber} onChange={handleMatriculaNumeroChange} />
            </div>
          </div>
        </div>

        <div className="d-flex gap-1 flex-wrap">
          <div className="select-box d-flex flex-column">
            <label htmlFor="laboratoryIds" className="m-0 f-s-16 inter-regular c-004675 p-s-1 p-e-1 p-t-0-5 p-b-0-5">Laboratorio</label>
            <select name="laboratoryIds" id="laboratoryIds" className="select-style b-r-2" value={formData.laboratoryId} onChange={handleLaboratorioChange}>
              <option value="">Selecciona Laboratorio</option>
              {loading && <option>Loading...</option>}
              {error && <option>Error loading laboratories</option>}
              {!loading && !error && laboratories.map(laboratory => (
                <option key={laboratory.id} value={laboratory.id}>{laboratory.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="btn-container d-flex p-b-1 gap-1 j-content-space-between">
          <button type="button" onClick={prevStep} className="btn size_2 white inter-medium f-s-16 m-0 c-004675 W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span className="btn_icon icon__arrow_left"></span>
              <span>Back</span>
            </div>
          </button>
          <button type="button" onClick={nextStep} className="btn size_2 gradient inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-space-between gap-1">
            <div className="flex_info d-flex flex-row gap-1 a-items-center">
              <span>Continue</span>
              <span className="btn_icon icon__arrow_right"></span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step3;
