const array = [2, -1, -3, 15, 0, 4];
let sum = 0;

someLabel: for ( let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        continue someLabel;
    }
    sum += array[i];
}

console.log(sum)