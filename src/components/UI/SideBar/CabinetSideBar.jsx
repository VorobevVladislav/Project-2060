import React, { useState } from 'react';
// import classes from './SideBar.module.css';
import SideBar from './SideBar';
import WardPaginator from './WardPaginator';
import wards from '../../../data/wards';
import '../../../styles/App.css'
import addPatient from './../../../images/add_patient.png'


const CabinetSideBar = ({ currentWard, changeWard}) => {

    return (
        <div className='sidebar'>
            <SideBar />
            <WardPaginator
                currentWard={currentWard}
                changeWard={changeWard}
            />
            <div className='addPatient'>
                <img src={addPatient}  style={{}}/>
                <div style={{marginTop: "10px"}}>Добавить пациента</div>
            </div>
        </div>
    );
};

export default CabinetSideBar;