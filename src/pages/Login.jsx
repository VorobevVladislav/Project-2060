import React, { useState } from 'react';
import './../styles/App.css'

import InfoPanel from '../components/Login/InfoPanel';
import RegistrationPanel from '../components/Login/Registration/RegistrationPanel';
import EnterPanel from '../components/Login/Enter/EnterPanel';


const Login = () => {

    const [isRegistration, setIsRegistration] = useState(true);
    // console.log(`isRegistration Was changed ${isRegistration}`);

    return (
        <div className='login'>
            <InfoPanel>
                <div className='regAndEnter'>
                    {
                        isRegistration
                            ?
                            <RegistrationPanel isRegistration={isRegistration} setIsRegistration={setIsRegistration} />
                            :
                            <EnterPanel isRegistration={isRegistration} setIsRegistration={setIsRegistration} />
                    }
                </div>
            </InfoPanel>
        </div >
    );
};

export default Login;