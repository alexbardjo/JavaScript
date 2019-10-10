/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение


function getDivisors(Number){

    validate(Number)

    const evenNumbers = [];

    for( let i = 0; i <= Number; i++) {

        if (Number % i === 0) {
            
        evenNumbers.push(i);
            
        }
    }
    console.log(evenNumbers);
}


function validate(param) {


    if (typeof param !== 'number') {

        throw new Error('message is not a number type');
    } 

    if (param < 1) {

        throw new Error('message is less than 1')

    }
}




getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;
