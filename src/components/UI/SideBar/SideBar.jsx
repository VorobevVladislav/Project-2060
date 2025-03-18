import React from 'react';
import classes from './SideBar.module.css';


const SideBar = () => {
  return (
    <div>
        <div className={classes.hospitalName}>
            ОГБУЗ "Городская больница №245"
        </div>
        <div className={classes.departamentName}>
            Отделение пульмонологии
        </div>
        
    </div>
  );
};

export default SideBar;