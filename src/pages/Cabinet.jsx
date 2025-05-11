import React, { useState } from 'react';
import './../styles/App.css'
import PatientList from '../components/PatientList';
import CabinetSideBar from '../components/UI/SideBar/CabinetSideBar';
import wards from '../data/wards';
import Navbar from '../components/Navbar';
import MyModal from '../components/UI/MyModal/MyModal';


const Cabinet = () => {
    const [currentWard, setCurrentWard] = useState(wards[0]);
    const changeWard = (wardId) => {
        setCurrentWard(wardId);
    }
    return (
        <div className='cabinet'>
            <Navbar />
            <div className='mainPage'>
                <CabinetSideBar
                    currentWard={currentWard}
                    changeWard={changeWard}
                />
                <PatientList currentWard={currentWard} />
            </div>
        </div>
    );
};

export default Cabinet;