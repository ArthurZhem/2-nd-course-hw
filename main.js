// Задание 8
// Функции 2.5

game1.addEventListener("click", () => {
    const userMonthNuber = Number(prompt('Введите число месяца', 1))

    if (isNaN(userMonthNuber)) {
        alert('Ты не пройдешь! :|')
    } else if (userMonthNuber === 0 || userMonthNuber >= 13) {
        alert('Такого месяца еще не придумали!)))')
    } else if (userMonthNuber === 12 || userMonthNuber === 1 || userMonthNuber === 2) {
        alert('Зима!')
    } else if (userMonthNuber === 3 || userMonthNuber === 4 || userMonthNuber === 5) {
        alert('Весна!')
    } else if (userMonthNuber === 6 || userMonthNuber === 7 || userMonthNuber === 8) {
        alert('Лето!')
    } else if (userMonthNuber === 9 || userMonthNuber === 10 || userMonthNuber === 11) {
        alert('Осень!')
    }
})