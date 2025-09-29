import React, { useContext, useState } from 'react';
import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';
import Divider from '../../UI/Divider/Divider';
import { MainContext } from '../../..';
import { useNavigate } from 'react-router';
import { CABINET_ROUTE } from '../../../utils/consts';
import { login } from '../../../API/userApi';

const EnterForm = ({ setCurrentScreen }) => {

    const [telelphoneOrEmailOrID, setTelelphoneOrEmailOrID] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { user } = useContext(MainContext)
    const navigate = useNavigate()

    const loginFunc = async (telelphoneOrEmailOrID, password) => {
        try {
            const data = await login(telelphoneOrEmailOrID, password)
            user.setIsAuth(true)
            user.setUser(user)
            navigate(CABINET_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className='enterForm'>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ marginBlock: 30, fontSize: 36, color: "rgba(15, 48, 61, 1)", fontWeight: "bold" }}>
                    Вход
                </div>
                <MyButton
                    style={{ marginBlock: 30, fontWeight: "bold", width: 180, height: 35 }}
                    onClick={() => setCurrentScreen('choose-registration')}
                >
                    К регистрации
                </MyButton>
            </div>

            <label htmlFor="telelphoneOrEmailOrID">Телефон, электронная почта, код организации</label>
            <MyInput
                id="telelphoneOrEmailOrID"
                name="telelphoneOrEmailOrID"
                type="text"
                value={telelphoneOrEmailOrID}
                placeholder='Введите email'
                onChange={(e) => setTelelphoneOrEmailOrID(e.target.value)}
            />
            <label htmlFor="password">Пароль</label>
            <MyInput
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder='Введите пароль'
                onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <MyInput
                        style={{ width: 20, height: 20, marginRight: 10 }}
                        id="showPassword"
                        type="checkbox"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                    />
                    <label htmlFor="showPassword" style={{ color: "rgba(98, 98, 96, 1)", fontSize: 16 }}>Показать пароль</label>
                </div>
                <MyButton>Восстановить пароль</MyButton>
            </div>
            <MyButton
                onClick={loginFunc}
                style={{
                    display: "flex",
                    width: "100%",
                    marginBlock: 30,
                    padding: 15,
                    backgroundColor: "rgba(97, 126, 198, 1)",
                    borderColor: "rgba(97, 126, 198, 1)",
                    color: "white"

                }}>
                ВОЙТИ
            </MyButton>
            <Divider />
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    margin: "30px 0px 10px 0px",
                    fontWeight: "bold"
                }}>
                Войти через
            </div>
            <MyButton
                style={{
                    display: "flex",
                    width: "100%",
                    padding: 15,
                    fontSize: 24
                }}>
                QR-код
            </MyButton>

        </div>
    );
};

export default EnterForm;