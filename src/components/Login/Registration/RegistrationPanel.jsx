import React, { useState } from 'react';
import './../../../styles/App.css';
import MyButton from '../../UI/MyButton/MyButton';
import ChooseRegistrationForm from './ChooseRegistrationForm';
import MedicalWorkerForm from './MedicalWorkerForm';
import PatientForm from './PatientForm';
import OrganizationForm from './OrganizationForm';

const RegistrationPanel = ({ isRegistration, setIsRegistration }) => {

    const [currentScreen, setCurrentScreen] = useState('type-select'); // Начальный экран


    // Рендер разных экранов
    const renderScreen = () => {
        switch (currentScreen) {
            case 'medical-worker':
                return <MedicalWorkerForm setCurrentScreen={setCurrentScreen} />;
            case 'patient':
                return <PatientForm setCurrentScreen={setCurrentScreen} />;
            case 'organization':
                return <OrganizationForm setCurrentScreen={setCurrentScreen} />;
            default: // 'type-select'
                return <ChooseRegistrationForm
                    isRegistration={isRegistration}
                    setIsRegistration={setIsRegistration}
                    setCurrentScreen={setCurrentScreen}
                />;
        }
    };

    return (
        <div className='registration'>
            {renderScreen()}
        </div>
    );
};

export default RegistrationPanel;