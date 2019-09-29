function truncate(string, maxLength) {
    if (typeof string !== 'string') {
        console.log('Error');
     }
     if (!string) {
     return string;
     }

     if (typeof maxLength !== 'number') {
        console.log('Error');
     }
     
     if (!maxLength) {
        return maxLength;
        }

        return (string.length > maxLength) ?
    string.slice(0, maxLength - 3) + '…' : string;

    }


console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21));
