// Задание 1

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}
console.log(min(8, 4))

//Задание 2

function parity(n) {
	if (n % 2 == 0) {
		console.log('Число четное')
	} else {
		console.log('Число нечетное')
	}
}


// Задание 3

// Задание 3.1
function square(a) {
	a = a ** 2
	console.log(a)
}
let a = 3
square(a)


// Задание 3.2
function square(a) {
	a = a ** 2
	return a
}
console.log(square(3))

//Задание 4

function userAge(a) {
	if (a === null || a.trim() === '' || typeof a === 'string') {
		alert('Не пиши ахинею! =)')
	} else if (a < 0) {
		alert('Введен неверный возраст')
	} else if (a >= 0 && a < 12) {
		alert('Здравствуй, друг!')
	} else if (a > 12) {
		alert('Добро пожаловать!')
	}
}
let userOld = prompt('Сколько вам лет?')
userAge(userOld)

// Задание 5

function correctNumber(a, b) {
	if (isNaN(a) || isNaN(b)) {
		console.log('Одно или оба значения не являются числом')
	} else if (mult = a * b) {
		console.log(mult)
	} 
}

correctNumber(3, 4)
correctNumber('j', 4)


// Задание 6

function newFunction(a) {
	if (isNaN(a)) {
		console.log('Переданный параметр не является числом')
	} else if (cube = a ** 3) {
		console.log(`${a} в кубе равняется ${cube}`)
	}
} 
newFunction(6)
newFunction('j')

// Задание 7
function getArea() {
	return Math.PI ** 2 * this.radius
}

function getPerimeter() {
	return 2 * Math.PI * this.radius
}

const circle1 = {
	radius: 458,
	getArea: getArea,
	getPerimeter: getPerimeter,
}

const circle2 = {
	radius: 560,
	getArea: getArea,
	getPerimeter: getPerimeter,
}

console.log(circle1.getArea())
console.log(circle1.getPerimeter())

console.log(circle2.getArea())
console.log(circle2.getPerimeter())

// Задание 8 ===> main.js

