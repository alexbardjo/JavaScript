/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isPositive =  function(Number) {

    if (typeof Number !== 'number') {
        throw new Error('message is not a number type')

    }

    const result = Number > 0 ? true : false;

    console.log(result);
    
}


isPositive(-3); // false
isPositive(3); // true


exports.isPositive = isPositive;
