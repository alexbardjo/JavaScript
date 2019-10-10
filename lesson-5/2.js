/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение


    
const f = function() {
        for (item of arguments) {
                
                 if (typeof item !== 'number') {
                        throw new Error('message is not a number type')
                
                }
        }

        let result = 0; 
        let i;
     
        
        for (i = 0; i < arguments.length; i++) {
         result = arguments[i] + result;
        }
        return result;
     }
        
    


console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
