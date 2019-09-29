function checkSpam (source, example) {
    let lowerSource = source.toLowerCase();
    let lowerExample = example.toLowerCase();
    

     if (typeof source !== 'string') {
        console.log('Error');
     }
     if (!source) {
     return source;
     }

     if (typeof example !== 'string') {
        console.log('Error');
     }
     
     if (!example) {
        return example;
        }


    return lowerSource.includes('spam');
}
console.log(checkSpam('pitterXXX@gmail.', 'xxx'));

console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));
