import {createContext, useState} from 'react';
import {ICustomer} from '~/types/customer';

export interface ICustomerContext {
  customer: ICustomer | null;
  setCustomer: any;
  updateCustomer: (customerData) => void;
}

export const customerContext = createContext<ICustomerContext | null>(null);

const CustomerProvider = ({children, customerData}) => {
  const [customer, setCustomer] = useState<ICustomer | null>(customerData);
  const updateCustomer = (customerData) => {
    const updatedcustomer = {...customer, ...customerData};
    setCustomer(updatedcustomer);
  };

  return (
    <customerContext.Provider value={{customer, setCustomer, updateCustomer}}>
      {children}
    </customerContext.Provider>
  );
};

export default CustomerProvider;
