import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router';
import AppRouter from './components/AppRouter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div >
    );
};

export default App;
