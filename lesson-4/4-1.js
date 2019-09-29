
const person = {};
    Object.defineProperty(person, 'salary', {
    get: function() {
        let date = new Date();
         let day = date.getDate();
    
        if (day < 20) {
            return 'good salary';
        } 
        else {
           return 'bad salary';
        };
    }
});

console.log(person.salary);



