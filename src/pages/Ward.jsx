import React from 'react';
import './../styles/App.css'
import PatientList from '../components/PatientList';
import WardSideBar from '../components/UI/SideBar/WardSideBar';

const Ward = () => {
    return (
        <div className='mainPage'>
            <WardSideBar
                wardId={15}
            />
            <PatientList
                currentWard={15}
            />
        </div>
    );
};

export default Ward;