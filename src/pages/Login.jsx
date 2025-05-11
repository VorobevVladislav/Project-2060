import React, { useState } from 'react';
import './../styles/App.css'
import MyButton from '../components/UI/MyButton/MyButton';
import logo from './../images/logo.png'
import InfoPanel from '../components/InfoPanel';
import RegistrationPanel from '../components/RegistrationPanel';
import EnterPanel from '../components/EnterPanel';


const Login = () => {

    const [isRegistration, setIsRegistration] = useState(true);

    return (
        <div className='login'>
            <InfoPanel />
            <div className='regAndEnter'>
                {
                    isRegistration
                        ?
                        <RegistrationPanel isRegistration={isRegistration} setIsRegistration={setIsRegistration} />
                        :
                        <EnterPanel isRegistration={isRegistration} setIsRegistration={setIsRegistration} />
                }
            </div>
        </div >
    );
};

export default Login;