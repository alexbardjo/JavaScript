'use strict'
/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение

class Stringer  {
    
    reverse(string) {
        const ArrayString = string.split('');
        
        const result = ArrayString.reduceRight((previousValue, currentValue) => {
            return previousValue + currentValue;
        });

        return result;
    }
    uppercaseFirst(string) {
       
        let newString = string[0].toUpperCase() + string.slice(1);

        return newString;
    }
    uppercaseAll(string) {
        let newString = string[0].toUpperCase() + string.slice(1);
        let result = '';
        for (let i = 0; i < newString.length; i++) {
        result += (newString[i-1] == ' ') ? newString[i].toUpperCase() : newString[i];
        }

        return result;
        

    }

}
const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;