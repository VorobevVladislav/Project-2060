import React from 'react';
import classes from './SideBar.module.css';
import SideBar from './SideBar';


const WardSideBar = ({wardId}) => {
    return (
        <div>
            <SideBar />
            <div className={classes.wardNumber}>
                Палата {wardId}
            </div>
        </div>
    );
};

export default WardSideBar;