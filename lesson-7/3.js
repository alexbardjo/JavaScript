/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function validate(a, b) {

   const aTypeof =  typeof a;


    switch(aTypeof) {
        case 'string': 

            break;
      
        case 'number':

            break;

        case 'object':
            
            break;
        
            default:
            
            throw new Error('message is not  suitable type');
          
    }
    
    if (typeof b !== 'number' ) {

        throw new Error('message is not  number type')

    }
}





const createArray = function (a, b) {

    validate(a, b)

    const array = new Array(b);
    
    array.fill(a);

 return array;
}



const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
