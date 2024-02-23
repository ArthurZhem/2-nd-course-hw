//Задание 1
let password = 'Пароль'
let entrance = prompt('Введите пароль')
if (entrance === 'Пароль') {
    console.log('Пароль введен верно')
} else {
    console.log('Пароль введен неправильно')
}



//Задание 2
let c = 6
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно!')
}

c = 10
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно!')
}

c = -3
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно!')
}

c = 0
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно!')
}

c = 2
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно!')
}

//Задание 3
let d = 90
let e = 210

if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно!')
} 

//Задание 4
let a = '2'
let b = '3'

alert(Number(a) + Number(b))

//Заданеие 5
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
       console.log('Зима')
       break;
    case 3:
    case 4:
    case 5:
       console.log('Весна')
       break;
    case 6:
    case 7:
    case 8:
       console.log('Лето')
       break;
    case 9:
    case 10:
    case 11:
       console.log('Осень')
       break;
 
    default:
       console.log('Нет такого месяца')
       break;
 }