/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

function validate(param) {

    if (typeof param !== 'number') {

        throw new Error('message is not a number type');
    } 

    if (param > 7  || param < 1) {

        throw new Error('message is less than 1')

    }
}

const f =  function(Number) {

    validate(Number)

        const week = {
            'number1' : 'Воскресенье', 'number2' : 'Понедельник', 
            'number3' : 'Вторник', 'number4' : 'Среда', 'number5' : 'Четверг', 
            'number6' : 'Пятница', 'number7' : 'Суббота'
        };

        const number ='number' + Number;

            result = week[number];

            console.log(result);
             
        
          }
        



f(1); // Воскресенье
f(4); // Среда



exports.f = f;
