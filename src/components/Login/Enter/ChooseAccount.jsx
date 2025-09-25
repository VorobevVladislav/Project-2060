import React, { useState } from 'react';
import './../../../styles/App.css';
import MyButton from '../../UI/MyButton/MyButton';
import doctorIcon from "./../../../images/doctor_icon_2.png";
import deleteIcon from "./../../../images/delete_icon.png";
import addIcon from "./../../../images/add_icon.png";
import { useNavigate } from 'react-router';

const ChooseAccount = ({ isRegistration, setIsRegistration, setCurrentScreen }) => {

    const goTo = useNavigate();

    return (
        <div className='chooseAccount'>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ marginBlock: 30, fontSize: 36, color: "rgba(15, 48, 61, 1)", fontWeight: "bold" }}>
                    Выбор аккаунта
                </div>
                <MyButton
                    style={{ marginBlock: 30, fontWeight: "bold", width: 180, height: 35 }}
                    onClick={() => setIsRegistration(true)}
                >
                    К регистрации
                </MyButton>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 15, width: "100%" }}>
                <MyButton
                    onClick={() => goTo("/cabinet")}
                    style={{
                        fontSize: 20,
                        padding: 10,
                        fontWeight: "bold",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <img src={doctorIcon} style={{ width: 50, height: 50, marginInline: 20 }} />
                        <div>
                            Главный врач
                        </div>
                    </div>
                    <MyButton
                        onClick={(e) => {
                            e.stopPropagation();
                            alert("Удалить аккаунт")
                        }}>
                        <img src={deleteIcon} style={{ width: 36, height: 36 }} />
                    </MyButton>
                </MyButton>
                <MyButton
                    onClick={() => setCurrentScreen('enter')}
                    style={{
                        fontSize: 20,
                        padding: 10,
                        fontWeight: "bold",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "start"
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <img src={addIcon} style={{ width: 50, height: 50, marginInline: 20 }} />
                        <div>
                            Войти в другой аккаунт
                        </div>
                    </div>
                </MyButton>
            </div>
        </div>
    );
};

export default ChooseAccount;