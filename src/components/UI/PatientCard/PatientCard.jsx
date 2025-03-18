import React from 'react';
import classes from './PatientCard.module.css';
import ava from '../../../images/1.jpg'
import change from '../../../images/changer_icon.png'
import comment from '../../../images/comment_icon.png'



const PatientCard = ({ avatar, name, age, pulse, SpO2, litresPerMinute }) => {
    const indicators = [
        { key: 'pulse', value: pulse, name: 'Пульс' },
        { key: 'hdd', value: 20, name: 'чдд' },
        { key: 'spo2', value: SpO2 + "%", name: 'SpO2' },
        { key: 'liters', value: litresPerMinute, name: 'л/мин' },
    ]
    return (
        <div className={classes.patientCard}>
            {/* <div className={classes.avatar} style={{ backgroundColor: "rgb(230, 237, 255)" }}>
                <img src={ava} />
            </div> */}
            {/* <div className={classes.patientName}>
                <b>Пациент:</b> {name}
            </div>
            <div className={classes.patientAge}>
                <b>Возраст:</b> {age}
            </div> */}
            <div style={{display: "flex", flexDirection: "row"}}>
                <div className={classes.bedId}>
                    <div className={classes.indicator_value}>
                        1
                    </div>
                    <div className={classes.indicator_name}>
                        место
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "5px", justifyContent: "space-between" }}>
                        <div className={classes.patientName}>
                            {name}
                        </div>
                        <div className={classes.patientAge}>
                            {age} лет
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "10px" }}>
                        <button className={classes.myBtn}>
                            <img src={change} style={{ height: "35px" }} />
                        </button>
                        <button className={classes.myBtn}>
                            <img src={comment} style={{ height: "35px" }} />
                        </button>
                    </div>
                </div>


            </div>
            <div className={classes.indicatorsBar}>
                {indicators.map(({ key, value, name }) => (
                    <div key={key} className={classes.indicator}>
                        <div className={classes.indicator_value}>
                            {value}
                        </div>
                        <div className={classes.indicator_name}>
                            {name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientCard;
