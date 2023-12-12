import {ReactNode, createContext, useState} from 'react';

interface Imodal {
  title: string;
  body: any;
}

export interface ImodalContext {
  modal: Imodal;
  openModal: (modal: Imodal) => void;
  closeModal: () => void;
}
export const modalContext = createContext<ImodalContext | null>(null);

interface Iprops {
  children: ReactNode;
}
const ModalContextProvider = (props: Iprops) => {
  const {children} = props;
  const [modal, setModal] = useState<any>(null);

  const closeModal = () => {
    document.body.classList.toggle('disable-scroll');
    setModal(null);
  };
  const openModal = (modal: Imodal) => {
    document.body.classList.toggle('disable-scroll');
    setModal(modal);
  };

  return (
    <modalContext.Provider value={{modal, openModal, closeModal}}>
      {children}
    </modalContext.Provider>
  );
};
export default ModalContextProvider;
