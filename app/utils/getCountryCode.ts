const getCountryCode = (phoneNumber) => {
  // Remove any non-digit characters from the phone number
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  // Extract the country code from the cleaned phone number
  let countryCode = '';
  if (cleanedNumber.charAt(0) === '1') {
    // For NANP (North American Numbering Plan) countries
    countryCode = cleanedNumber.substring(0, 3);
  } else {
    // For non-NANP countries
    countryCode = cleanedNumber.substring(0, cleanedNumber.length - 10);
  }

  return countryCode;
};
export default getCountryCode;
