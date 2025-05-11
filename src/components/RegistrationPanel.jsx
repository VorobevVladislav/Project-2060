import React from 'react';
import './../styles/App.css';
import MyButton from '../components/UI/MyButton/MyButton';

const RegistrationPanel = ({ isRegistration, setIsRegistration }) => {
    return (
        <div className='registration'>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ margin: 30, fontSize: 36, color: "rgba(15, 48, 61, 1)", fontWeight: "bold" }}>
                    Регистрация
                </div>
                <MyButton
                    style={{ margin: 40, fontWeight: "bold" }}
                    onClick={() => setIsRegistration(false)}
                >
                    Вход
                </MyButton>
            </div>
            <div style={{ textAlign: "center", fontSize: 28, margin: 30, fontWeight: "bold" }}>
                Выберите тип регистрации
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 15, width: "100%" }}>
                <MyButton onClick={() => alert("Медицинский работник")} style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
                    Медицинский работник
                </MyButton>
                <MyButton onClick={() => alert("Пациент или представитель")} style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
                    Пациент или представитель
                </MyButton>
                <MyButton onClick={() => alert("Добавить организацию")} style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
                    Добавить организацию
                </MyButton>
            </div>
        </div>
    );
};

export default RegistrationPanel;