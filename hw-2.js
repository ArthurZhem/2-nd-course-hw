let a, b;

// Задание 1
a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const iphone = 2007;
alert(iphone);

// Задание 3
const creator = "Brendan Eich";
alert(creator);

// Задание 4
a = 10;
b = 2;

const sum = a + b;
alert=(sum);

const difference = a - b;
alert(difference);

const product = a * b;
alert(product);

const quolitat = a / b; 
alert(quolitat);

// Задание 5
a = 2 ** 5;
alert(a);

// Задание 6
a = 9;
b = 2;
alert(quolitat);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9.0
let user = {
    name: "Vasya",
    age: 23,
    isAdmin: true,
};

// Задание 9.1
user["city of residence"] = "Москва";

// Задание 9.2
user.age = 32;

// Задание 9.3
const field = "city of residence";
delete user[field];

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
let name = prompt("Как вас зовут?");
alert(`Привет, ${name}!`);
