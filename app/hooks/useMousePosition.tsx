import {useState, useEffect} from 'react';

const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({x: null, y: null});

  const updatePosition = (e: any) => {
    setMousePosition({x: e.clientX, y: e.clientY});
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);

    // Remove Event Listner
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return {mousePosition};
};
export default useMouse;
