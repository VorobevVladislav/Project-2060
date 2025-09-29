import React from 'react';
import MyButton from '../components/UI/MyButton/MyButton';
import { useNavigate } from 'react-router';
import { LOGIN_ROUTE } from '../utils/consts';

const Error = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1 style={{ color: "red" }}>
                Вы перешли на несуществующую страницу
                <MyButton
                    onClick={() => navigate(LOGIN_ROUTE)}
                >
                    Перейти на страницу входа
                </MyButton>
            </h1>
        </div>
    );
};

export default Error;