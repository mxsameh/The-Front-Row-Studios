import {isValidPhoneNumber} from 'react-phone-number-input';

const validateCustomer = (form) => {
  const customerData: any = {};
  const validInputKeys = [
    'firstName',
    'lastName',
    'email',
    'password',
    'phone',
  ];
  try {
    for (const [key, value] of form.entries()) {
      /** Check if input is included */
      if (
        validInputKeys.includes(key) &&
        typeof value === 'string' &&
        value.length
      ) {
        customerData[key] = value;
      }
    }
    /** Check if phone is valid */
    const phone = customerData.phone.replaceAll(' ', '');
    customerData.phone = phone;
    const isValidPhone = isValidPhoneNumber(phone || '');
    if (!isValidPhone) throw new Error('Please enter a valid phone');
    /** Check if password is valid */
    const password = customerData.password;
    if (password && password.length < 4) {
      throw new Error('Password must be atleast 4 characters');
    }

    return {error: null, customer: customerData};
  } catch (error: any) {
    return {error: error.message, customer: null};
  }
};
export default validateCustomer;
