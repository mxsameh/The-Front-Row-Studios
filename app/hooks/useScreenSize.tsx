import {useEffect, useState} from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });
  const updateScreenSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenSize = {width, height};
    setScreenSize(screenSize);
  };
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
