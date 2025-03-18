
const patients = [
    { id: 1, wardId: 15, bedId: 1, name: "Иванов Иван Иванович", age: 7, pulse: 98, SpO2: 82, litresPerMinute: 3.5, hdd: 20 },
    { id: 2, wardId: 15, bedId: 2, name: "Петрова Анна Сергеевна", age: 45, pulse: 75, SpO2: 96, litresPerMinute: 2.8 },
    { id: 3, wardId: 15, bedId: 3, name: "Сидоров Олег Викторович", age: 32, pulse: 88, SpO2: 93, litresPerMinute: 4.0 },
    { id: 4, wardId: 15, bedId: 4, name: "Кузнецова Елена Дмитриевна", age: 68, pulse: 92, SpO2: 89, litresPerMinute: 3.2 },
    { id: 5, wardId: 15, bedId: 5, name: "Николаев Михаил Петрович", age: 12, pulse: 105, SpO2: 91, litresPerMinute: 3.0 },
    { id: 6, wardId: 15, bedId: 6, name: "Смирнова Ольга Игоревна", age: 29, pulse: 72, SpO2: 98, litresPerMinute: 2.5 },

    { id: 7, wardId: 23, bedId: 1, name: "Васнецова Татьяна Александровна", age: 55, pulse: 82, SpO2: 94, litresPerMinute: 3.8 },
    { id: 8, wardId: 23, bedId: 2, name: "Фёдоров Артём Денисович", age: 8, pulse: 110, SpO2: 84, litresPerMinute: 2.9 },
    { id: 9, wardId: 23, bedId: 3, name: "Ковалёва Виктория Павловна", age: 42, pulse: 78, SpO2: 97, litresPerMinute: 4.2 },
    { id: 10, wardId: 23, bedId: 4, name: "Григорьев Дмитрий Олегович", age: 61, pulse: 95, SpO2: 88, litresPerMinute: 3.1 },
    { id: 11, wardId: 23, bedId: 5, name: "Орлова Людмила Васильевна", age: 34, pulse: 68, SpO2: 99, litresPerMinute: 2.7 },
    { id: 12, wardId: 23, bedId: 6, name: "Тарасов Алексей Игоревич", age: 19, pulse: 85, SpO2: 95, litresPerMinute: 3.4 },

    { id: 13, wardId: 27, bedId: 1, name: "Белова Екатерина Сергеевна", age: 27, pulse: 72, SpO2: 96, litresPerMinute: 2.6 },
    { id: 14, wardId: 27, bedId: 2, name: "Козлов Андрей Николаевич", age: 53, pulse: 90, SpO2: 92, litresPerMinute: 3.9 },
    { id: 15, wardId: 27, bedId: 3, name: "Мартынова Ирина Викторовна", age: 6, pulse: 115, SpO2: 83, litresPerMinute: 2.4 },
    { id: 16, wardId: 27, bedId: 4, name: "Семёнов Павел Дмитриевич", age: 44, pulse: 80, SpO2: 98, litresPerMinute: 4.1 },
    { id: 17, wardId: 27, bedId: 5, name: "Филиппова Надежда Алексеевна", age: 75, pulse: 98, SpO2: 87, litresPerMinute: 3.3 },
    { id: 18, wardId: 27, bedId: 6, name: "Дмитриев Сергей Петрович", age: 31, pulse: 76, SpO2: 94, litresPerMinute: 2.8 },

    { id: 19, wardId: 31, bedId: 1, name: "Александрова Мария Олеговна", age: 38, pulse: 84, SpO2: 93, litresPerMinute: 3.6 },
    { id: 20, wardId: 31, bedId: 2, name: "Жуков Владислав Андреевич", age: 9, pulse: 103, SpO2: 85, litresPerMinute: 2.3 },
    { id: 21, wardId: 31, bedId: 3, name: "Соколова Оксана Дмитриевна", age: 57, pulse: 87, SpO2: 91, litresPerMinute: 4.3 },
    { id: 22, wardId: 31, bedId: 4, name: "Павлов Антон Ильич", age: 23, pulse: 70, SpO2: 99, litresPerMinute: 2.9 },
    { id: 23, wardId: 31, bedId: 5, name: "Комарова Лидия Васильевна", age: 66, pulse: 93, SpO2: 89, litresPerMinute: 3.7 },
    { id: 24, wardId: 31, bedId: 6, name: "Мельников Роман Сергеевич", age: 15, pulse: 100, SpO2: 90, litresPerMinute: 3.0 },

    { id: 25, wardId: 33, bedId: 1, name: "Герасимова Анастасия Павловна", age: 48, pulse: 79, SpO2: 97, litresPerMinute: 4.4 },
    { id: 26, wardId: 33, bedId: 2, name: "Крылов Игорь Владимирович", age: 11, pulse: 108, SpO2: 86, litresPerMinute: 2.1 },
    { id: 27, wardId: 33, bedId: 3, name: "Савельев Геннадий Степанович", age: 72, pulse: 96, SpO2: 88, litresPerMinute: 3.8 },
    { id: 28, wardId: 33, bedId: 4, name: "Тихонова Вероника Андреевна", age: 29, pulse: 74, SpO2: 99, litresPerMinute: 2.5 },
    { id: 29, wardId: 33, bedId: 5, name: "Фролов Артём Викторович", age: 50, pulse: 81, SpO2: 95, litresPerMinute: 4.5 },
    { id: 30, wardId: 33, bedId: 6, name: "Яковлева Елена Николаевна", age: 37, pulse: 77, SpO2: 96, litresPerMinute: 3.1 }
];
export default patients;