import styles from "@/styles/components/Modal.module.scss";
import Button from "@/components/button";

const TwoButtonModal = ({
  modalText,
  mainButton,
  leftButtonFunction,
  leftButtonText,
  leftButtonFunctionParameters,
  rightButtonFunction,
  rightButtonText,
  rightButtonFunctionParameters,
}) => {
  return (
    <div className={styles.Modal}>
      <div
        className={styles.ModalBackground}
        onClick={() =>
          mainButton.toLowerCase() === "left"
            ? leftButtonFunction(leftButtonFunctionParameters)
            : rightButtonFunction(rightButtonFunctionParameters)
        }
      ></div>
      <div className={styles.ModalContent}>
        {modalText}
        <div className={styles.ModalButtons}>
          <Button
            buttonFunction={leftButtonFunction}
            buttonFunctionParameters={leftButtonFunctionParameters}
            buttonText={leftButtonText}
          />
          <Button
            buttonFunction={rightButtonFunction}
            buttonFunctionParameters={rightButtonFunctionParameters}
            buttonText={rightButtonText}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoButtonModal;
