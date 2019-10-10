/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
function validate(param) {
    if (typeof param !== 'number') {
        throw new Error('message is not a number type')
    }
  }

const f =  function(a, b, c) {

    validate(a);
    validate(b);
    validate(c);

    const result =(a - b)/c;

    return  result;
}

console.log(f(9, 3, 2)); // 3

exports.f = f;
