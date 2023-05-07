import styles from "@/styles/components/Modal.module.scss";
import { useState } from "react";
import Button from "./button";
import Router from 'next/router';

const Modal = ( {modalText} ) => {

  const closeModal = () => {
    Router.push('/')
  }

  return (
    <div className={styles.Modal}>
      {modalText}
      <Button buttonFunction={closeModal} buttonText="Close"/>
    </div>
  );
};

export default Modal;
