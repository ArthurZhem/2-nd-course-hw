// Задание 1
let a = 0;
while (a < 2) {
    console.log('Привет')
    a++;
}

// Задание 2
a = 1;
while (a <= 5) {
    console.log(a)
    a++;
}

// Задание 3
a = 7;
while (a <= 22) {
    console.log(a)
    a++;
}

// Задание 4
let object = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400',
}
for (key in object) {
    if (object[key]) {
        console.log(`${key} — зарплата ${object[key]} долларов`)
    }
}

// Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
     n = n/2 
     num++
}
console.log(n)
console.log(num)

// Задание 6
for(let f = 5; f < 30; f += 7) {
    console.log(`Сегодня пятница, ${f}-е число. Необходимо подготовить отчет.`)
}