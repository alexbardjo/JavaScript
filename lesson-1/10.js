const arr = [2, 5, 9, 15, 0, 4];

someLabel :for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < 3 || arr[i] > 10 ) {
        continue someLabel;
    }
   
    const result = arr [i];
console.log(result);
}
