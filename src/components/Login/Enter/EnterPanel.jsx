import React, { useState } from 'react';
import './../../../styles/App.css';
import MyButton from '../../UI/MyButton/MyButton';
import doctorIcon from "./../../../images/doctor_icon_2.png";
import deleteIcon from "./../../../images/delete_icon.png";
import addIcon from "./../../../images/add_icon.png";
import { useNavigate } from 'react-router';
import EnterForm from './EnterForm';
import ChooseAccount from './ChooseAccount';

const EnterPanel = ({ isRegistration, setIsRegistration }) => {

    const goTo = useNavigate();
    const [currentScreen, setCurrentScreen] = useState('chooseAccount');

    // Рендер разных экранов
    const renderScreen = () => {
        switch (currentScreen) {
            case 'chooseAccount':
                return <ChooseAccount
                    isRegistration={isRegistration}
                    setIsRegistration={setIsRegistration}
                    setCurrentScreen={setCurrentScreen}
                />;
            case 'enter':
                return <EnterForm
                    isRegistration={isRegistration}
                    setIsRegistration={setIsRegistration}
                    setCurrentScreen={setCurrentScreen}
                />;
        }
    };

    // return (
    //     <div className='registration'>
    //         {renderScreen()}
    //     </div>
    // );

    return (
        <div className='enter'>
            {renderScreen()}
        </div>
    );
};

export default EnterPanel;