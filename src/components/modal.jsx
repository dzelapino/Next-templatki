import styles from "@/styles/components/Modal.module.scss";
import Button from "./button";

const Modal = ( {modalText, buttonFunction, buttonFunctionParams, buttonText} ) => {

  return (
    <div className={styles.Modal}>
      <div className={styles.ModalBackground} onClick={() => buttonFunction(buttonFunctionParams)}/>
      <div className={styles.ModalContent}>
      {modalText}
      <Button buttonFunction={buttonFunction} buttonFunctionParams={buttonFunctionParams} buttonText={buttonText}/>
      </div>
    </div>
  );
};

export default Modal;
