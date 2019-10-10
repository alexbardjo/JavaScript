/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение



let i = 0;

function f(arr) {
   
    validate(arr);

let spliced = arr.splice(0, 1);

console.log(spliced[i]);

    if (i < arr.length) {

        f(arr);
    }    
}

function validate(param) {

    if (Array.isArray(param) !== true) {

        throw new Error('message is not  Array type');
    } 

    if (param[0] === undefined ) {

        throw new Error('message is empty array')

    }
}

f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
