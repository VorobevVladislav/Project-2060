import React, { useState } from 'react';
import './../styles/App.css';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';

const AddNewDevice = ({ onSave }) => {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [rep_SNP, setRep_SNP] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [doctor_comments, setDoctor_comments] = useState('');

    const saveFormData = (e) => {
        e.preventDefault(); //Предотвращаем перезагрузку страницы для sumbit

        console.log(surname);
        console.log(name);
        console.log(patronymic);
        console.log(birthDate);
        console.log(selectedGender);
        console.log(rep_SNP);
        console.log(phone);
        console.log(email);
        console.log(diagnosis);
        console.log(doctor_comments);

        onSave();
        cleanInputs(); // очищаем инпуты после отправки формы
    }

    const cleanInputs = () => {
        setSurname('');
        setName('');
        setPatronymic('');
        setBirthDate('');
        setSelectedGender('');
        setRep_SNP('');
        setPhone('');
        setEmail('');
        setDiagnosis('');
        setDoctor_comments('');
    }

    return (
        <div className='addNewPatient'>
            <div style={{ backgroundColor: "rgb(14, 0, 107)", width: "100%", height: "5px" }} />
            <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%", padding: 20, borderRight: "1px solid rgb(14, 0, 107)" }}>
                        <h2 style={{ textAlign: "center" }}>Личные данные пациента</h2>
                        <label htmlFor="surname">Фамилия</label>
                        <MyInput
                            style={{ marginBottom: 10 }}
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
                        <label htmlFor="birth_date">Дата рождения</label>
                        <MyInput
                            id="birth_date"
                            name="patient_birth_date"
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
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
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%", padding: 20, borderLeft: "1px solid rgb(14, 0, 107)" }}>
                        <h2 style={{ textAlign: "center" }}>Контактные данные представителя</h2>
                        <label htmlFor="rep_SNP">ФИО представителя</label>
                        <MyInput
                            id="rep_SNP"
                            name="rep_SNP"
                            value={rep_SNP}
                            onChange={(e) => setRep_SNP(e.target.value)}
                        />
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
                        {/* Крутой инпут с профи ру */}
                        {/* <input
                            class="ui_27dTD input-default"
                            id="profi-ui-6"
                            placeholder="7 123 456 78-90"
                            autocomplete="tel"
                            name="phoneNumber"
                            data-shmid="auth-input-phone"
                            type="tel"
                            value="7 ___-___-__-__"
                            inputmode="numeric"
                        /> */}
                        <label htmlFor="email">Электронная почта</label>
                        <MyInput
                            id="email"
                            name="rep_email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <h2 style={{ textAlign: "center" }}>Сведения о пациенте </h2>
                        <label htmlFor="diagnosis">Диагноз</label>
                        <MyInput
                            id="diagnosis"
                            name="patient_diagnosis"
                            value={diagnosis}
                            onChange={(e) => setDiagnosis(e.target.value)}
                        />
                        <label htmlFor="doctor_comments">Комментарии врача</label>
                        <MyInput
                            id="doctor_comments"
                            name="doctor_comments"
                            value={doctor_comments}
                            onChange={(e) => setDoctor_comments(e.target.value)}
                        />
                        <div>ID пациента</div>
                        <MyButton
                            onClick={() => alert('Нажата кнопка "Сгенерировать"')}
                        >
                            Сгенерировать
                        </MyButton>
                        <div>QR-код для создания аккаунта пациента</div>
                        <MyButton
                            onClick={() => alert('Нажата кнопка "Сгенерировать"')}
                        >
                            Сгенерировать
                        </MyButton>

                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>

                <div style={{ display: "flex", width: "50%", justifyContent: "right" }}>
                    <MyButton
                        style={{ margin: 10 }}
                        onClick={saveFormData}
                    >
                        Сохранить изменения
                    </MyButton>
                </div>
                <div style={{ display: "flex", width: "50%", justifyContent: "left" }}>
                    <MyButton
                        style={{ margin: 10, color: "rgba(135, 21, 21, 1)" }}
                        onClick={cleanInputs}
                    >
                        Удалить
                    </MyButton>
                </div>
            </div>

        </div>
    );
};

export default AddNewDevice;