/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isEven = function (Number) {

    if (typeof Number !== 'number') {
        throw new Error('message is not a number type')

    }

    const result = !(Number % 2)  ? true : false;

    console.log(result);
}

isEven(3); // false
isEven(4); // true




exports.isEven = isEven;
