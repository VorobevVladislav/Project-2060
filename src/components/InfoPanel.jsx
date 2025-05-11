import React from 'react';
import './../styles/App.css'
import logo from './../images/logo.png'

const InfoPanel = () => {
    return (
        <div className='info'>
            <img src={logo} style={{ width: 250, height: "auto" }} />
            <div style={{ margin: 10 }}>
                <p style={{ fontSize: 36, color: "rgba(15, 48, 61, 1)", textAlign: "center", fontWeight: "bold" }}>
                    Доступ к системе
                </p>
                <p style={{ fontSize: 36, color: "rgba(15, 48, 61, 1)", textAlign: "center", fontWeight: "bold" }}>
                    концентрации кислорода
                </p>
            </div>
            <div style={{ fontSize: 18, color: "rgba(15, 48, 61, 1)" }}>
                Официальный сайт ОКСИ
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", gap: 5, marginTop: "30%", fontSize: 14 }}>
                <div style={{ fontSize: 16, color: "rgba(98, 98, 96, 1)" }}>
                    Инструкция для входа в личный кабинет:
                </div>
                <div >
                    <a href={"https://github.com/VorobevVladislav/Project-2060"} style={{ fontSize: 16, color: "rgba(0, 68, 204, 1)" }}>
                        Для пациентов и их представителей
                    </a>
                </div>
                <div>
                    <a href={"https://github.com/VorobevVladislav/Project-2060"} style={{ fontSize: 16, color: "rgba(0, 68, 204, 1)" }}>
                        Для медицинских работников
                    </a>
                </div>
            </div>
            <div style={{ fontSize: 16, color: "rgba(98, 98, 96, 1)", margin: 10 }}>
                ©️ НИУ ВШЭ, МИЭМ, Проект 2060
            </div>
        </div>
    );
};

export default InfoPanel;