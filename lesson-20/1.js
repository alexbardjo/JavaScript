class Customers {
    newArray = [];
    
        add(obj) {
            let { verified } = obj;
            if (verified) {
                this.newArray.push(obj);
            }
        
    }
    
    [Symbol.iterator]() {
        let i = 0;
        
        return {
            next: () => {
                const done = i >= this.newArray.length;  
                const value = !done ? this.newArray[i++] : undefined;


                return {
                    value,
                    done,
                };
            },
        };
    }
}


const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}



// // В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }
// ```