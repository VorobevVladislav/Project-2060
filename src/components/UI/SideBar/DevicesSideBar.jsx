import React, { useState } from 'react';
// import classes from './SideBar.module.css';
import SideBar from './SideBar';
import WardPaginator from './WardPaginator';
import wards from '../../../data/wards';
import '../../../styles/App.css'
import addPatient from './../../../images/add_patient.png'
import MyModal from '../MyModal/MyModal';
import AddNewPatient from '../../AddNewPatient';
import AddNewDevice from '../../AddNewDevice';


const DevicesSideBar = ({ currentWard, changeWard }) => {
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
                <div style={{ marginTop: "10px", fontSize: "32px", textAlign: "center" }}>Добавить устройство</div>
            </div>
            <MyModal
                visible={addPatientVisible}
                setVisible={setAddPatientVisible}
            // style={{ width: "100%" }}
            >
                <AddNewDevice onSave={() => setAddPatientVisible(false)} />
            </MyModal>
        </div>
    );
};

export default DevicesSideBar;