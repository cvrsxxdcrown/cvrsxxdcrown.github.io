/**
 * Возвращает число в степени n.
 * @param {number} x - Основание.
 * @param {number} n - Показатель степени.
 * @returns {number} Возвращает x в степени n.
 */
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    return x * pow(x, n - 1);
}

/**
 * Вычисляет сумму чисел от 1 до n включительно.
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
function sumTo(n) {
    return (n * (n + 1)) / 2;
}

/**
 * Проверяет, является ли год високосным.
 * @param {number} year - Год.
 * @returns {boolean} Возвращает true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
}

/**
 * Вычисляет факториал числа.
 * @param {number} n - Число.
 * @returns {BigInt} Факториал числа n.
 */
function factorial(n) {
    if (n === 0 || n === 1) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n - Номер числа Фибоначчи.
 * @returns {BigInt} n-е число Фибоначчи.
 */
function fib(n) {
    let a = 0n, b = 1n;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return n === 0 ? a : b;
}

/**
 * Сравнивает целочисленное значение x с переданным значением y.
 * @param {number} x - Число для сравнения.
 * @returns {function} Функция, которая принимает число y и возвращает результат сравнения с x.
 */
function compare(x) {
    return function (y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    }
}

/**
 * Возвращает сумму всех переданных аргументов.
 * @param {...number} args - Аргументы для суммирования.
 * @returns {number} Сумма всех аргументов.
 */
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
