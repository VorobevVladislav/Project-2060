import React from 'react';
import PatientCard from './UI/PatientCard/PatientCard';
import patients from '../data/patients';
import a from '../images/1.jpg'
import './../styles/App.css'


const PatientList = ({ currentWard }) => {
    return (
        <div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                // justifyContent: ""
            }}>
                {patients.filter(patient => currentWard === patient.wardId).map((patient) => (
                    <PatientCard
                        key={patient.id} // Лучше использовать уникальный ID из данных, если есть
                        // avatar={a}
                        name={patient.name}
                        age={patient.age}
                        pulse={patient.pulse}
                        SpO2={patient.SpO2}
                        litresPerMinute={patient.litresPerMinute}
                    />

                ))}
            </div>
        </div >

    );
};

export default PatientList;