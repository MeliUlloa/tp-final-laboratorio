import React, { useState, useEffect } from 'react';
import './FilterContainer.css';
import { fetchEspecialidades } from '../../services/specialtyService';

const FilterContainer = ({ onViewChange, onFilterChange }) => {
    const [isGridView, setIsGridView] = useState(true);
    const [specialties, setSpecialties] = useState([]);
    const [visibleSpecialties, setVisibleSpecialties] = useState(8);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const loadSpecialties = async () => {
            try {
                const data = await fetchEspecialidades();
                const sortedSpecialties = data.sort((a, b) => a.name.localeCompare(b.name)); // Ordena alfabéticamente
                setSpecialties(sortedSpecialties);
            } catch (error) {
                console.error('Error loading specialties:', error);
            }
        };

        loadSpecialties();
    }, []);

    const handleViewToggle = () => {
        setIsGridView(!isGridView);
        onViewChange(!isGridView);
    };

    const handleFilterClick = (specialtyId, specialtyName) => {
        onFilterChange(specialtyId, specialtyName);
    };

    const handleShowMore = () => {
        setShowAll(!showAll);
        setVisibleSpecialties(showAll ? 8 : specialties.length);
    };

    return (
        <div className="filter-container d-flex flex-row gap-1 a-items-center w-100 p-s-1 p-e-1">
            <div className="d-flex a-items-center gap-1">
                <p className="inter-regular f-s-16 c-616161 m-0">Grilla</p>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isGridView}
                        onChange={handleViewToggle}
                        id="inputView"
                    />
                    <span className="slider round"></span>
                </label>
            </div>
            <div id="tagWrapper" className="tag-wrapper d-flex flex-row gap-1 p-0 m-0 a-items-center">
                <ul
                    id="selectFilter"
                    className={`d-flex ${showAll ? 'flex-wrap' : 'flex-nowrap'} gap-0-5 p-0 m-0 a-items-center`}
                >
                    {specialties.slice(0, visibleSpecialties).map((specialty) => (
                        <li key={specialty.id}>
                            <button
                                className="tag tagFilter"
                                onClick={() => handleFilterClick(specialty.id, specialty.name)}>
                                <p>{specialty.name}</p>
                                <span className="icon icon__close"></span>
                            </button>
                        </li>
                    ))}
                    {specialties.length > 8 && (
                        <li className="show-more-button">
                            <button
                                className="btn size_1 white inter-medium f-s-14 m-0 c-ffffff d-flex flex-row a-items-center j-content-space-between"
                                onClick={handleShowMore}
                            >
                                <div className="flex_info d-flex flex-row gap-1 a-items-center">
                                    <span className="btn_icon icon__filter"></span>
                                    <span className="white_filled">{showAll ? 'Mostrar menos' : 'Más filtros'}</span>
                                </div>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default FilterContainer;
