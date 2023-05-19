window.addEventListener('DOMContentLoaded', () => {
    const stocks = [
      { symbol: 'AAPL', name: 'Apple', priceElementId: 'applePrice' },
      { symbol: 'MSFT', name: 'Microsoft', priceElementId: 'microsoftPrice' },
      { symbol: 'GOOGL', name: 'Google', priceElementId: 'googlePrice' },
      { symbol: 'BTC', name: 'Bitcoin', priceElementId: 'bitcoinPrice' }
    ];
  
    stocks.forEach(stock => {
      fetchStockPrice(stock.symbol)
        .then(price => displayStockPrice(stock.priceElementId, price))
        .catch(error => console.error(`Error fetching stock price for ${stock.name}:`, error));
    });
  });
  
  function fetchStockPrice(symbol) {
    const url = `https://nasdaq-stock-pricing.p.rapidapi.com/Stock/GetPrice/${symbol}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '55fecfcbc3mshfdd1d009aac40d1p1373f0jsnb8b9376049a9',
        'X-RapidAPI-Host': 'nasdaq-stock-pricing.p.rapidapi.com'
      }
    };
  
    return fetch(url, options)
      .then(response => response.json())
      .then(data => data.data.price);
  }
  
  function displayStockPrice(elementId, price) {
    const priceElement = document.getElementById(elementId);
    if (priceElement) {
      priceElement.textContent = price.toFixed(2);
    }
  }
  


