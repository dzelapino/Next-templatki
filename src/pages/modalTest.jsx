import styles from "@/styles/pages/ModalTest.module.scss";
import Modal from "@/components/modal";
import Tile from "@/components/tile";
import Button from "@/components/button";
import Router from "next/router";
import { useState } from "react";

const ModalTest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalErrorFlag, setModalErrorFlag] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    modalErrorFlag ? Router.push("/") : setModalOpen(false);
  };

  const toggleModalErrorFlag = (param) => {
    setModalErrorFlag(param);
  };

  return (
    <div className={styles.ModalTest}>
      <Button
        buttonFunction={toggleModalErrorFlag}
        buttonFunctionParams={!modalErrorFlag}
        buttonText={`Toggle error flag: ${modalErrorFlag}`}
      />
      <div className={styles.ModalAndTileWrapper}>
        <Tile data={{ text: "Testing modal" }} />
        {modalOpen ? (
          <Modal
            modalText="Modal is working"
            buttonFunction={closeModal}
            buttonText="Close Modal"
          />
        ) : null}
      </div>
      <Button buttonFunction={openModal} buttonText="Open Modal" />
    </div>
  );
};

export default ModalTest;
