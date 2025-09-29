import React from 'react';
import './../../../styles/App.css';
import MyButton from '../../UI/MyButton/MyButton';

const ChooseRegistrationForm = ({ setCurrentScreen }) => {
    return (
        <div className='chooseRegistrationForm'>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ marginBlock: 30, fontSize: 36, color: "rgba(15, 48, 61, 1)", fontWeight: "bold" }}>
                        Регистрация
                    </div>
                <MyButton
                    style={{ marginBlock: 30, fontWeight: "bold", width: 180, height: 35 }}
                    onClick={() => setCurrentScreen('choose-account-or-enter')}
                >
                    Вход
                </MyButton>
            </div>
            <div style={{ textAlign: "center", fontSize: 28, margin: 30, fontWeight: "bold" }}>
                Выберите тип регистрации
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 15, width: "100%" }}>
                <MyButton onClick={() => setCurrentScreen('registrate-medical-worker')} style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
                    Медицинский работник
                </MyButton>
                <MyButton onClick={() => setCurrentScreen('registrate-patient')} style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
                    Пациент или представитель
                </MyButton>
                <MyButton onClick={() => setCurrentScreen('registrate-organization')} style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
                    Добавить организацию
                </MyButton>
            </div>
        </div>
    );
};

export default ChooseRegistrationForm;