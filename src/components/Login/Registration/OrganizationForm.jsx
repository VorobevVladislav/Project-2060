import React from 'react';
import MyButton from '../../UI/MyButton/MyButton';


const OrganizationForm = ({ setCurrentScreen }) => {
    return (
        <div className='organizationForm'>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"  }}>
                <div style={{ marginBlock: 30, fontSize: 36, color: "rgba(15, 48, 61, 1)", fontWeight: "bold" }}>
                    Регистрация
                </div>
                <MyButton
                    style={{ marginBlock: 30, fontWeight: "bold", width: 180, height: 35 }}
                    onClick={() => setCurrentScreen('type-select')}
                >
                    Назад
                </MyButton>
            </div>
            <div style={{ textAlign: "center", fontSize: 28, margin: 30, fontWeight: "bold" }}>
                Добавить организацию
            </div>
        </div>
    );
};

export default OrganizationForm;