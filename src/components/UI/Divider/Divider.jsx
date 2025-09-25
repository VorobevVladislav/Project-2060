import React from 'react';
import styles from './Divider.module.css';

const Divider = ({ text = "ИЛИ" }) => {
    return (
        <div className={styles.dividerContainer}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>{text}</span>
            <div className={styles.dividerLine}></div>
        </div>
    );
};

export default Divider;