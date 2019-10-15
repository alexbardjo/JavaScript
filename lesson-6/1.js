/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

function validate(array, cb) {

    if (!Array.isArray(array)) {
        throw new Error ('first argument should be array');
    }
    if (typeof cb !== 'function') {
        throw new Error ('second argument should be function');
    }
}


const forEach = function(array, cb) {

    validate(array, cb);

    

    for (let index = 0; index <array.length; index++) {

    const element = array[index];

    const result = cb(element, index, array);
    
    }
 
}


const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;
