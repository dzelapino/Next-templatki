import styles from "@/styles/pages/ModalTest.module.scss";
import Modal from "@/components/modal";
import Tile from "@/components/tile";
import Button from "@/components/button";
import { useState } from "react";

const ModalTest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.ModalTest}>
      <div className={styles.ModalAndTileWrapper}>
        <Tile data={{ text: "Testing modal" }} />
        {modalOpen ? 
        <Modal modalText="Modal is working" buttonFunction={closeModal} buttonText="Close Modal"/>
        : null}
      </div>
      <Button buttonFunction={openModal} buttonText="Open Modal" />
    </div>
  );
};

export default ModalTest;
