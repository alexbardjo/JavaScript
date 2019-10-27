/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (включительно).
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение

const TOTAL_ITERATIONS = 105;
let invocations = 0;


const Array = [];

function createNumberGenerator() {

    
    const min = 1;
    const max = 100;


    return recursion = () => {

            const number = Math.round(Math.random() * (max - min) + min);

        const includes = Array.includes(number);

        if (includes) {
           return recursion();
        } 
        else {
            Array.push(number);
            
            return number;
            
        }
            
      }
      
}
const generateNumber = createNumberGenerator();
try {
    for (invocations; invocations < TOTAL_ITERATIONS; invocations++) {
        console.log(`Iteration: ${invocations}. Number: ${generateNumber()}`);
    }
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
    console.log(`Function generated an error on ${invocations} invocation.`);
}









// Когда все числа выведутся:
// Error: There are no more numbers available.
// Function generated an error on 100 invocation.

exports.createNumberGenerator = createNumberGenerator;