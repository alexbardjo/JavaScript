/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

function validate(array, cb) {

    if (!Array.isArray(array)) {
        throw new Error ('first argument should be array');
    }
    if (typeof cb !== 'function') {
        throw new Error ('second argument should be function');
    }
}


const reduce = function(array, cb, INITIAL_ACCUMULATOR) {

    validate(array, cb);


let startNumber = INITIAL_ACCUMULATOR;

    for (let i = 0; i < array.length; i++) {

      let  result = cb( startNumber,  array[i], i,  array);

      startNumber = result;
       
    }

    console.log(startNumber);
}


const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
