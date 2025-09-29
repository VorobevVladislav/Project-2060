import React, { useState } from 'react';
import './../../../styles/App.css';
import MyButton from '../../UI/MyButton/MyButton';
import ChooseRegistrationForm from './ChooseRegistrationForm';
import MedicalWorkerForm from './MedicalWorkerForm';
import PatientForm from './PatientForm';
import OrganizationForm from './OrganizationForm';
import ChooseAccount from '../Enter/ChooseAccount';
import EnterForm from '../Enter/EnterForm';

const ActionPanel = () => {

    const [currentScreen, setCurrentScreen] = useState('choose-registration'); // Начальный экран

    // Рендер разных экранов
    const renderScreen = () => {
        switch (currentScreen) {
            case 'registrate-medical-worker':
                return <MedicalWorkerForm
                    setCurrentScreen={setCurrentScreen}
                />;
            case 'registrate-patient':
                return <PatientForm
                    setCurrentScreen={setCurrentScreen}
                />;
            case 'registrate-organization':
                return <OrganizationForm
                    setCurrentScreen={setCurrentScreen}
                />;
            case 'choose-registration':
                return <ChooseRegistrationForm
                    setCurrentScreen={setCurrentScreen}
                />;
            case 'choose-account-or-enter':
                return <ChooseAccount
                    setCurrentScreen={setCurrentScreen}
                />;
            case 'enter':
                return <EnterForm
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

export default ActionPanel;