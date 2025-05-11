import React from 'react';
import './../styles/App.css'
import MyButton from '../components/UI/MyButton/MyButton';
import doctorIcon from "./../images/doctor_icon_2.png";
import deleteIcon from "./../images/delete_icon.png";
import addIcon from "./../images/add_icon.png";

const EnterPanel = ({ isRegistration, setIsRegistration }) => {
    return (
        <div className='enter'>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ margin: 30, fontSize: 36, color: "rgba(15, 48, 61, 1)", fontWeight: "bold" }}>
                    Выбор аккаунта
                </div>
                <MyButton
                    style={{ margin: 40, fontWeight: "bold" }}
                    onClick={() => setIsRegistration(true)}
                >
                    К регистрации
                </MyButton>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 15, width: "100%" }}>
                <MyButton
                    onClick={() => alert("Главный врач")}
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
                    onClick={() => alert("Войти в другой аккаунт")}
                    style={{
                        fontSize: 20,
                        padding: 10,
                        fontWeight: "bold",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",

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

export default EnterPanel;