const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, INR: 73.5, GBP: 0.75, AUD: 1.3, CAD: 1.25, JPY: 110, CNY: 6.5 },
    EUR: { USD: 1.18, EUR: 1, INR: 86.3, GBP: 0.88, AUD: 1.54, CAD: 1.47, JPY: 129.53, CNY: 7.67 },
    INR: { USD: 0.0136, EUR: 0.0116, INR: 1, GBP: 0.0087, AUD: 0.017, CAD: 0.016, JPY: 1.5, CNY: 0.088 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 101.92, GBP: 1, AUD: 1.76, CAD: 1.67, JPY: 150.73, CNY: 8.72 },
    AUD: { USD: 0.77, EUR: 0.65, INR: 56.82, GBP: 0.57, AUD: 1, CAD: 0.95, JPY: 85.49, CNY: 4.96 },
    CAD: { USD: 0.8, EUR: 0.68, INR: 59.88, GBP: 0.6, AUD: 1.05, CAD: 1, JPY: 89.74, CNY: 5.2 },
    JPY: { USD: 0.0091, EUR: 0.0077, INR: 0.67, GBP: 0.0066, AUD: 0.0117, CAD: 0.0111, JPY: 1, CNY: 0.058 },
    CNY: { USD: 0.15, EUR: 0.13, INR: 11.39, GBP: 0.11, AUD: 0.2, CAD: 0.19, JPY: 17.24, CNY: 1 },
  };
  
  document.getElementById('convert').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
  
    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);
  
    document.getElementById('resultText').innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
  });
  