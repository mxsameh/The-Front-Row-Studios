import useScreenSize from '~/hooks/useScreenSize';
import DesktopHeader from './desktop header';
import MobileHeader from './mobile header';
import CartAside from '../cart';
import {useState} from 'react';

const Header = (props) => {
  const {cart} = props;
  const cartCount = cart?.totalQuantity || 0;
  const {width} = useScreenSize();
  const [isCartOpened, setIsCartOpened] = useState(false);

  const toogleCart = () => {
    setIsCartOpened((prev) => !prev);
  };
  return (
    <>
      {width > 860 ? (
        <DesktopHeader cartCount={cartCount} toogleCart={toogleCart} />
      ) : (
        <MobileHeader cartCount={cartCount} toogleCart={toogleCart} />
      )}
      <CartAside
        cart={cart}
        isCartOpened={isCartOpened}
        toogleCart={toogleCart}
      />
    </>
  );
};
export default Header;
