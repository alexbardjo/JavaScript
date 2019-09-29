const person = {};

Object.defineProperties(person, {
    rate: {
        writable: true,
        enumerable: false,
    },
    
    salary: {
        enumerable: false,

            get: function() {
                let date = new Date();
                 let day = date.getDate();
                if (typeof this.rate !== 'undefined') {
                    return day * this.rate;
                } 
                    return 0;    
            }
        }
    });
        

Object.seal(person.rate,person.salary);

person.rate = 30;

console.log(person);
console.log(person.salary);



