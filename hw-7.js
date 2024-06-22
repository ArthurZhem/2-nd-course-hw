// Задание 1
let string = 'js'
string = string.toUpperCase()
console.log(string)


// Задание 2
function filterByPrefix(arr, prefix) {
    return arr.filter((item) => item.toLowerCase().startsWith(prefix.toLowerCase()));
}
const strings = ['apple', 'Banana', 'cherry', 'blueberry'];
const prefix = 'B';
const filteredArray = filterByPrefix(strings, prefix);

console.log(filteredArray);

// Задание 3
//До меньшего числа (вниз):
Math.floor(32.58884)

//До большего целого (вверх):
Math.ceil(32.58884)

//До ближайшего целого (округление):
Math.round(32.58884)


// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('Минимальное значение:', min);
console.log('Максимальное значение:', max);

// Задание 5
function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    console.log(randomNumber);
}

// Задание 6
function generateRandomArray(number) {
    const arrayLength = Math.floor(number / 2);
    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
        randomArray.push(Math.floor(Math.random() * number));
    }
    return randomArray;
}
const inputNumber = 5;
const randomNumbers = generateRandomArray(inputNumber);
console.log(randomNumbers);

// Задание 7
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const minNumber = 10;
const maxNumber = 20;
const randomNum = getRandomNumberInRange(minNumber, maxNumber);
console.log(randomNum);

// Задание 8
const currentDate = new Date();
console.log(currentDate);

// Задание 9

const currentDate1 = new Date();

// Создал копию переменной currentDate1, чтобы не изменять оригинальную дату
const futureDate = new Date(currentDate1);

// Добавил 73 дня к дате futureDate
futureDate.setDate(futureDate.getDate() + 73);

// Выводим полученную дату в консоль
console.log(futureDate);


// Задание 10
function formatDate(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    const formattedDate = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}
console.log(formatDate(date));
