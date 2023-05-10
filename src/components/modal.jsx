import styles from "@/styles/components/Modal.module.scss";
import Button from "./button";

const Modal = ( {modalText, buttonFunction, buttonText} ) => {

  return (
    <div className={styles.Modal}>
      {modalText}
      <Button buttonFunction={buttonFunction} buttonText={buttonText}/>
    </div>
  );
};

export default Modal;
