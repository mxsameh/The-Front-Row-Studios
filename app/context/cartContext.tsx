import {createContext, useState} from 'react';

export const cartContext = createContext(null);

const CartProvider = ({children}) => {
  const [cart, setCart] = useState(null);

  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
};

export default CartProvider;
