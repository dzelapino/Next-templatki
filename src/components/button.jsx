import styles from "@/styles/components/Button.module.scss";

const Button = ({ buttonFunction, buttonFunctionParams, buttonText }) => {

  return (
    <button onClick={() => buttonFunction(buttonFunctionParams)} className={styles.Button}>
        {buttonText}
    </button>
  );
}

export default Button;