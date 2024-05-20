// lab3.js

/**
 * Возвращает дробную часть числа.
 *
 * @param {number} num - Число для извлечения дробной части
 * @return {string} Дробная часть числа
 */
export function getDecimal(num) {

    return Number((num - Math.floor(num)).toFixed(2));
    }

/**
 * Нормализует URL, добавляя https:// в начале, если это необходимо.
 * @param {string} url - URL для нормализации.
 * @returns {string} Нормализованный URL.
 */
export function normalizeUrl(url) {
    return url.startsWith('http://') ? url.replace('http://', 'https://') :
           url.startsWith('https://') ? url :
           `https://${url}`;
}

/**
 * Проверяет, содержит ли строка str спам (слова "viagra" или "XXX").
 * @param {string} str - Строка для проверки.
 * @returns {boolean} True, если строка содержит спам, иначе False.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усечает строку до указанной длины, добавляя "…" в конце, если она длиннее.
 * @param {string} str - Строка для усечения.
 * @param {number} maxlength - Максимальная длина строки.
 * @returns {string} Усечённая строка.
 */
export function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}

/**
 * Преобразует первый символ в верхний регистр
 * 
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с первой заглавной буквой.
 */
export function ucFirst(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}


/**
 * Преобразует строку вида 'var-test-text' в 'varTestText'.
 * @param {string} str - Исходная строка.
 * @returns {string} Преобразованная строка.
 */
export function camelize(str) {
    return str
        .split('-')      
        .map((word, index) => index === 0 ? word : ucFirst(word)) 
        .join('');         
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая его).
 * @param {number} n - Количество чисел Фибоначчи.
 * @returns {BigInt[]} Массив чисел Фибоначчи.
 */
export function fibs(n) {
    let fibArray = [0n, 1n];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray.slice(0, n);
}

/**
 * Возвращает массив, отсортированный по убыванию.
 * @param {number[]} arr - Исходный массив чисел.
 * @returns {number[]} Отсортированный массив.
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений.
 * @param {Array} arr - Исходный массив.
 * @returns {Array} Массив уникальных значений.
 */
export function unique(arr) {
    return Array.from(new Set(arr));
}
