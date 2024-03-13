// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (const el of numbs) {
    if (el == 10) break;
    console.log(el);
}

// Задание 2
const numbz = [1, 5, 4, 10, 0, 3];
console.log(numbz.indexOf(4))

// Задание 3
{
    const array = [1, 3, 5, 10, 20]
    console.log(array.join(" "))
}
// Задание 4
{
    const array = [];
    for (let i = 0; i < 3; i++) {
        const innerArray = [];
        for (let j = 0; j < 3; j++) {
            innerArray.push(1)
        }
        array.push(innerArray)
    }
    console.log(array)
}

// Задание 5
{
    const array = [1, 1, 1];
    for (let index = 0; index < 3; index++) {
        array.push(2)
    }
    console.log(array)
}

// Задание 6
{
    const array = [9, 8, 7, 'a', 6, 5];
    array.sort()
    array.pop()
    console.log(array)
}

// Задание 7
{
    const array = [9, 8, 7, 6, 5];
    let value = prompt('Введите число');
    if (array.includes(Number(value)))
        alert('Угадал')
    else
        alert('Не угадал')
}

// Задание 8
{
    const string = 'abcdef'
    console.log(string.split("").reverse().join(""))
}

// Задание 9
{
    const array = [[1, 2, 3], [4, 5, 6]];
    let result = []
    for (const element of array) {
        result.push(...element)
    }
    console.log(result)
}

// Задание 10
{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let index = 0; index < 9; index++) {
        const element = array[index];
        const neighbor = array[index + 1];
        console.log(element + neighbor);
    }
}

// Задание 11
{
    const array = [2, 4, 6, 8];
    const array2 = array.map((element) => element ** 2)

    console.log(array2)
}

// Задание 12
{
    // function newFunction(array) {return 0}
    // const newFunction = function (array) {return 0}
    // let newFunction = (array) => {return 0}
    // let newFunction = (array) => 0

    const array = ['a', 'b', 'c', 'd'];
    const array2 = array.map((element) => element.length);
    console.log(array2);
}

// Задание 13
{
    const array = [2, -4, 6, -8];
    const array2 = array.filter((element) => element < 0);
    console.log(array2)
}

// Задание 14
{
    const array = [...Array(10)].map((element) => Math.floor(Math.random() * 10))
    console.log(array);
}

// Задание 15
{
    const array = [...Array(6)].map((element) => Math.ceil(Math.random() * 10));
    const sum = array.reduce((total, number) => total + number, 0);
    console.log(sum / 6)
}