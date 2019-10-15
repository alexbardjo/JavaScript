/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

function validate(array, cb) {


    if (!Array.isArray(array)) {
        throw new Error ('first argument should be array');
    }

    if (typeof cb !== 'function') {
        throw new Error ('second argument should be function');
    }
}


const some = function(array, cb) {

    validate(array, cb);
    

    let boolean;

    for (let i = 0; i < array.length; i++) {

        let result = cb(array[i], i, array);

        if (!result) {
            boolean = result;
        } else { 
            return true}

    }
    return  boolean;

}

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = some;
