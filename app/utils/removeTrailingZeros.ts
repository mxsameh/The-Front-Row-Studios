const removeTrailingZeros = (number) => {
  // Convert the number to a string
  let numberString = number.toString();

  // Remove trailing zeros
  if (numberString.includes('.')) {
    numberString = numberString.replace(/\.?0*$/, '');
  }

  // Convert back to a number
  return parseFloat(numberString);
};

export default removeTrailingZeros;
