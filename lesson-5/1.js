/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

const f = function(number) {

    if (typeof number !== 'number') {
        throw new Error('message is not a number type')

    }
return number**3

}

console.log(f(2)); // 8

exports.f = f;
