const getCurrencySymbol = (currencyCode) => {
  currencyCode = currencyCode.toUpperCase();
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    EGP: 'LE',
    // Add more currency symbols as needed
  };

  if (currencyCode in currencySymbols) {
    return currencySymbols[currencyCode];
  } else {
    return null; // If the currency code is not found
  }
};
export default getCurrencySymbol;
