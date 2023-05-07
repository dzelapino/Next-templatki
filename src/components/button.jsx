import styles from "@/styles/components/Button.module.scss";

const Button = ({ buttonFunction, buttonText }) => {


  return (
    <button onClick={() => buttonFunction()} className={styles.Button}>
        {buttonText}
    </button>
  );
}

export default Button;