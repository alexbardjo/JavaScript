// let n = 1000;
// let num = 5;
//     x = n/(2**num);
//     console.log(x);

let n = 1000;
Label: while (n >= 50) {
     let result = n/2;
     if (result < 50) {
        console.log(result);
        break;
     } else {
         continue Label;
     }
 }
 