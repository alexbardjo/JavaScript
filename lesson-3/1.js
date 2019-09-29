
function upperCaseFirst(string) {
    if (typeof string !== 'string') {
       console.log('Error');
       
    }
    if (!string) {
    return string;
    }
        
   const newString = string[0].toUpperCase() + string.slice(1);
    return newString;
}
console.log(upperCaseFirst('pitter')); 
console.log(upperCaseFirst(''));
