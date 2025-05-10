import React, { useState } from 'react';
import classes from './SideBar.module.css';
import wards from '../../../data/wards';
import wardPaginationIcon from '../../../images/ward_paginator_icon.png';
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const WardPaginator = ({ currentWard, changeWard }) => {
    // Создаем состояние для отслеживания видимости
    const [isVisible, setIsVisible] = useState(false);

    // Функция для переключения состояния
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <div
                onClick={toggleVisibility}
                className={classes.wardPaginator}
            >
                <div style={{ fontSize: "24px" }}>
                    Палата {currentWard}
                </div>
                <div>
                    <img src={wardPaginationIcon} />
                </div>
            </div>


            {isVisible && (
                <div>
                    {wards.map((id) => (
                        <span
                            onClick={() => changeWard(id)}
                            key={id}
                            className={id === currentWard ? classes.currentWard : classes.wardPagination}
                        >
                            Палата {id}
                        </span>
                    ))}
                </div>
            )}

            
        </div>
    );






};

export default WardPaginator;