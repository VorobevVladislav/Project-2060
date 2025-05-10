import React, { useState } from 'react';
// import classes from './SideBar.module.css';
import SideBar from './SideBar';
import WardPaginator from './WardPaginator';
import wards from '../../../data/wards';
import '../../../styles/App.css'
import addPatient from './../../../images/add_patient.png'
import MyModal from '../MyModal/MyModal';
import AddNewPatient from '../../AddNewPatient';


const CabinetSideBar = ({ currentWard, changeWard }) => {
    const [addPatientVisible, setAddPatientVisible] = useState(false);
    return (
        <div className='sidebar'>
            <SideBar />
            <WardPaginator
                currentWard={currentWard}
                changeWard={changeWard}
            />
            <div
                className='addPatient_btn'
                onClick={() => setAddPatientVisible(true)}
            >
                <img src={addPatient} style={{ margin: "20px" }} />
                <div style={{ marginTop: "10px", fontSize: "32px", textAlign: "center" }}>Добавить пациента</div>
            </div>
            <MyModal
                visible={addPatientVisible}
                setVisible={setAddPatientVisible}
                // style={{ width: "100%" }}
            >
                <AddNewPatient onSave={() => setAddPatientVisible(false)}/>
            </MyModal>
        </div>
    );
};

export default CabinetSideBar;