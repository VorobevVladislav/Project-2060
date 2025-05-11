import React from 'react';
import './../styles/App.css'

import logo from './../images/logo.png'
import search from './../images/search.png'
import confirmed from './../images/галочка.png'
import doctor_icon from './../images/doctor_icon.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} className='navbar_logo' />
            <div className='navbar_btns'>
                <button className='search_btn'>
                    <img src={search} className='icon' />
                    <div className='search'>Поиск</div>
                </button>
                <div className='doctor'>
                    <div className='name'>Врач Грачев А. А.</div>
                    <img src={confirmed} className='icon' />
                </div>
                <div className='doctor__icon'>
                    <img src={doctor_icon} className='icon' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;