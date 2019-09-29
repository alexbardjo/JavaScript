function extractCurrencyValue(source) {
    const str = source[0];
    
    if (typeof str !== 'string') {
        console.log('Error');
        
    }
    
    return + source.slice(1);
    
  }
  const PRICE = '$120';

   console.log(extractCurrencyValue(PRICE)); 
   
   