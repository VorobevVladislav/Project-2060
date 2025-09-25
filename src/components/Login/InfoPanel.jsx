import React, { useEffect, useState } from 'react';
import './../../styles/App.css'
import logo from './../../images/logo.png'

const InfoPanel = ({ children, ...props }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 800);
        };

        // Проверка при монтировании
        checkMobile();

        // Слушатель изменений размера
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    if (isMobile) {
        return (
            <div className='info_mobile'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(224, 232, 255, 1)",
                        height: 100,
                        width: "100%",
                        padding: 10,
                        gap: 10
                    }}>
                        <img src={logo} style={{ height: 80, width: "auto" }} />
                        <div>
                            <p style={{ fontSize: 20, color: "rgba(15, 48, 61, 1)", textAlign: "center", fontWeight: "bold" }}>
                                Доступ к системе
                            </p>
                            <p style={{ fontSize: 20, color: "rgba(15, 48, 61, 1)", textAlign: "center", fontWeight: "bold" }}>
                                концентрации кислорода
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
                <div style={{
                    backgroundColor: "rgba(224, 232, 255, 1)",
                    height: 150,
                    width: "100%"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 14,
                        margin: 10
                    }}>
                        <div style={{ fontSize: 16, color: "rgba(98, 98, 96, 1)" }}>
                            Инструкция для входа в личный кабинет:
                        </div>
                        <div>
                            <a href={"https://github.com/VorobevVladislav/Project-2060"} style={{ fontSize: 16, color: "rgba(0, 68, 204, 1)" }}>
                                Для пациентов и их представителей
                            </a>
                        </div>
                        <div>
                            <a href={"https://github.com/VorobevVladislav/Project-2060"} style={{ fontSize: 16, color: "rgba(0, 68, 204, 1)" }}>
                                Для медицинских работников
                            </a>
                        </div>
                        <div style={{ fontSize: 16, color: "rgba(98, 98, 96, 1)", margin: 10 }}>
                            ©️ НИУ ВШЭ, МИЭМ, Проект 2060
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='info'>
            <div className='info_left'>
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
                    <div>
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
            <div className='info_right'>
                {children}
            </div>
        </div>
    );
};

export default InfoPanel;