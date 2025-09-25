import React, { useState } from 'react';
import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';
import '../../../styles/App.css';

const MedicalWorkerForm = ({ setCurrentScreen }) => {

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [controlQuestion, setControlQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [hospitalName, setHospitalName] = useState('');
    const [hospitalAdress, setHospitalAdress] = useState('');

    const saveFormData = (e) => {
        e.preventDefault(); //Предотвращаем перезагрузку страницы для sumbit

        console.log(surname);
        console.log(name);
        console.log(patronymic);
        console.log(selectedGender);
        console.log(phone);
        console.log(email);


        // onSave();
        // cleanInputs(); // очищаем инпуты после отправки формы
    }

    const cleanInputs = () => {
        setSurname('');
        setName('');
        setPatronymic('');
        setSelectedGender('');
        setPhone('');
        setEmail('');

    }

    return (
        <div className='medicalWorkerForm'>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ marginBlock: 30, fontSize: 36, color: "rgba(15, 48, 61, 1)", fontWeight: "bold" }}>
                    Регистрация
                </div>
                <MyButton
                    style={{ marginBlock: 30, fontWeight: "bold", width: 180, height: 35 }}
                    onClick={() => setCurrentScreen('type-select')}
                >
                    Назад
                </MyButton>
            </div>
            <div style={{ textAlign: "center", fontSize: 24, margin: 30, fontWeight: "bold" }}>
                Медицинский работник
            </div>
            <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
                <h2>Личные данные </h2>
                <label htmlFor="surname">Фамилия</label>
                <MyInput
                    id="surname"
                    name="patient_surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
                <label htmlFor="name">Имя</label>
                <MyInput
                    id="name"
                    name="patient_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="patronymic">Отчество</label>
                <MyInput
                    id="patronymic"
                    name="patient_patronymic"
                    value={patronymic}
                    onChange={(e) => setPatronymic(e.target.value)}
                />
                <label>Пол</label>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
                    <MyInput
                        id="male"
                        name="gender"
                        value="male"
                        type="radio"
                        hidden
                        checked={selectedGender === 'male'}
                        onChange={(e) => setSelectedGender(e.target.value)}
                    />
                    <label
                        htmlFor="male"
                        className={selectedGender === 'male' ? "addNewPatientGenderBtns Male" : 'addNewPatientGenderBtns'}
                    >
                        Мужской
                    </label>
                    <MyInput
                        id="female"
                        name="gender"
                        value="female"
                        type="radio"
                        hidden
                        checked={selectedGender === 'female'}
                        onChange={(e) => setSelectedGender(e.target.value)}
                    />
                    <label
                        htmlFor="female"
                        className={selectedGender === 'female' ? "addNewPatientGenderBtns Female" : 'addNewPatientGenderBtns'}
                    >
                        Женский
                    </label>
                </div>
                <label htmlFor="photo">Фотография</label>
                <MyInput
                    id="photo"
                    name="patient_photo"
                    type="file"
                />
                <h2>Контактные данные</h2>
                <label htmlFor="phone">Мобильный телефон</label>
                <MyInput
                    id="phone"
                    name="rep_phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="7 123 456 78-90"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="email">Электронная почта</label>
                <MyInput
                    id="email"
                    name="rep_email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h2>Рабочие данные</h2>
                <label htmlFor="hospitalName">Название медицинского учреждения</label>
                <MyInput
                    id="hospitalName"
                    name="hospitalName"
                    type="text"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                />
                <label htmlFor="hospitalAdress">Адрес медицинского учреждения</label>
                <MyInput
                    id="hospitalAdress"
                    name="hospitalAdress"
                    type="text"
                    value={hospitalAdress}
                    onChange={(e) => setHospitalAdress(e.target.value)}
                />
                <label>Подтверждение работодателя</label>
                <MyButton style={{ marginTop: 10 }}>Запросить</MyButton>

                <h2>Данные для аунтефикации</h2>
                <label htmlFor="password">Пароль</label>
                <MyInput
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <MyInput
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
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
                <label htmlFor="controlQuestion">Контрольный вопрос</label>
                <MyInput
                    id="controlQuestion"
                    name="controlQuestion"
                    type="text"
                    value={controlQuestion}
                    onChange={(e) => setControlQuestion(e.target.value)}
                />
                <label htmlFor="answer">Ответ</label>
                <MyInput
                    id="answer"
                    name="answer"
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <div style={{ display: "flex", flexDirection: "row", boxSizing: "content-box", overflowWrap: "break-word", alignItems: "flex-start" }}>
                    <MyInput
                        style={{ width: 20, height: 20, marginRight: 10 }}
                        id="agreement"
                        type="checkbox"
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}
                    />
                    <label htmlFor="agreement">
                        <div style={{ color: "rgba(98, 98, 96, 1)", fontSize: 16 }}>Я принимаю
                            <a href={"https://github.com/VorobevVladislav/Project-2060"} style={{ color: "rgba(0, 68, 204, 1)", fontSize: 16, marginInline: 5 }}>
                                условия соглашения о пользовании ресурсом
                            </a>
                        </div>
                        <div style={{ color: "rgba(98, 98, 96, 1)", fontSize: 16 }}>и ознакомлен с
                            <a href={"https://github.com/VorobevVladislav/Project-2060"} style={{ color: "rgba(0, 68, 204, 1)", fontSize: 16, marginInline: 5 }}>
                                политикой в отношении обработки персональных данных
                            </a>
                        </div>
                    </label>
                </div>
                <MyButton style={{ marginTop: 10 }}>Зарегистрироваться</MyButton>

            </div>
        </div>
    );
};

export default MedicalWorkerForm;