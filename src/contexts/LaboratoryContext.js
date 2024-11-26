import React, { createContext, useState, useContext } from 'react';

const LaboratoryContext = createContext();

export const useLaboratory = () => useContext(LaboratoryContext);

export const LaboratoryProvider = ({ children }) => {

    const [selectedLaboratory, setSelectedLaboratory] = useState({
        id: null,
        name: '',
        imageUrl: ''
    });

    return (
        <LaboratoryContext.Provider value={{ selectedLaboratory, setSelectedLaboratory }}>
            {children}
        </LaboratoryContext.Provider>
    );
};
