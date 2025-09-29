import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';

export const MainContext = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MainContext.Provider value={{
            user: new UserStore()
        }}
        >
            <App />
        </MainContext.Provider>
    </React.StrictMode>
);
