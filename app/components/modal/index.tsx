import {ReactNode, useContext} from 'react';
import styles from './styles.module.css';
import {ImodalContext, modalContext} from '~/context/modalContext';
import Close_Icon from '~/icons/Close_Icon';

interface Iprops {}
const Modal = (props: Iprops) => {
  const {modal, closeModal} = useContext(modalContext) as ImodalContext;

  const handleClick = (e) => {
    const id = e.target.id;
    if (id == 'modal') closeModal();
  };

  if (!modal) return null;

  return (
    <div id="modal" className={styles.modal} onClick={handleClick}>
      <div className={styles.modal_wrapper}>
        <div className={styles.modal_header}>
          <h3 className={styles.modal_title}>{modal.title}</h3>
          <Close_Icon className={styles.modal_closeIcon} onClick={closeModal} />
        </div>
        <div
          className={styles.modal_content}
          dangerouslySetInnerHTML={{__html: modal.body}}
        />
      </div>
    </div>
  );
};
export default Modal;
