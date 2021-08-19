
export const loadTicker = (tickerName) => 
fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD,JPY,EUR`
      ).then(r => r.json())

       
