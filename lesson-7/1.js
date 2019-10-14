/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

// // Решение

const inspect = function (array) {

    if (!Array.isArray(array)) {

        throw new Error ('message is not Array')
    }

    function isString(value) {
    
        return typeof value === 'string';
      }

      var filtered = array.filter(isString);



    
    
    const newArray = filtered.map(function(value) {
    
            return value.length;
       });


       return newArray;
       
    }

    


const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

// exports.inspect = inspect;
