import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CabinetSideBar from '../components/UI/SideBar/CabinetSideBar';
import PatientList from '../components/PatientList';
import wards from '../data/wards';
import DevicesSideBar from '../components/UI/SideBar/DevicesSideBar';
import DevicesList from '../components/DevicesList';

const Devices = () => {
    const [currentWard, setCurrentWard] = useState(wards[0]);
    const changeWard = (wardId) => {
        setCurrentWard(wardId);
    }
    return (
        <div className='devices'>
            <Navbar />
            <div className='mainPage'>
                {/* <CabinetSideBar
                    currentWard={currentWard}
                    changeWard={changeWard}
                /> */}
                <DevicesSideBar
                    currentWard={currentWard}
                    changeWard={changeWard}
                />
                <DevicesList currentWard={currentWard} />
                {/* <DevicesList currentWard={currentWard} /> */}
            </div>
        </div>
    );
};

export default Devices;