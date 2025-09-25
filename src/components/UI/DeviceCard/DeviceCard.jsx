import React from 'react';
import classes from './DeviceCard.module.css';
import change from '../../../images/changer_icon.png'
import comment from '../../../images/comment_icon.png'

const DeviceCard = ({ avatar, name, age, pulse, SpO2, litresPerMinute }) => {
    // const indicators = [
    //     { key: 'pulse', value: pulse, name: 'Пульс' },
    //     { key: 'hdd', value: 20, name: 'чдд' },
    //     { key: 'spo2', value: SpO2 + "%", name: 'SpO2' },
    //     { key: 'liters', value: litresPerMinute, name: 'л/мин' },
    // ]
    return (
        <div className={classes.patientCard}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className={classes.bedId}>
                        <div className={classes.place_value}>
                            1
                        </div>
                        <div className={classes.indicator_place}>
                            место
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%", marginLeft: "5px", justifyContent: "space-between" }}>
                        <div className={classes.patientName}>
                            Регулятор ГБ245ОП15-1
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "10px" }}>
                    <button className={classes.nullBtn}>
                        <img src={change} style={{ height: "35px" }} />
                    </button>
                </div>
            </div>
            <div style={{ display: "flex", backgroundColor: "rgba(128, 172, 225, 1)", height: "20%", margin: 5, borderRadius: 10, justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>Устройство работает</div>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around" }}>
                <div className={classes.indicator}>
                    <div className={classes.indicator_value}>
                        3.5
                    </div>
                    <div className={classes.indicator_name}>
                        Л/МИН
                    </div>
                </div>
                <div className={classes.indicator}>
                    <div className={classes.indicator_value}>
                        3.5
                    </div>
                    <div className={classes.indicator_name}>
                        Л/МИН
                    </div>
                </div>
                <div className={classes.indicator}>
                    <div className={classes.indicator_value}>
                        3.5
                    </div>
                    <div className={classes.indicator_name}>
                        Л/МИН
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeviceCard;












