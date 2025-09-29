import React, { useState } from 'react';
import './../styles/App.css'
import InfoPanel from '../components/Login/InfoPanel';
import ActionPanel from '../components/Login/Registration/ActionPanel';


const Login = () => {
    return (
        <div className='login'>
            <InfoPanel>
                <div className='actionPanel'>
                    <ActionPanel />
                </div>
            </InfoPanel>
        </div >
    );
};

export default Login;