import styles from "@/styles/pages/WorkerTest.module.scss";
import Tile from "@/components/tile";
import Button from "@/components/button";
import Router from "next/router";
import { useState } from "react";
import Worker from "web-worker";
import TwoButtonModal from "@/components/twoButtonModal";

let worker;

const WorkerTest = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const startRedirecting = async () => {
    if (worker === undefined) {
      console.log("creating worker")
      worker = new Worker(new URL("../../public/worker.js", import.meta.url), {
        type: "module",
      });
      worker.addEventListener("message", (e) => {
        if (e.data === "Finished") {
          Router.push('/')
        }
      });
    }
    console.log("posting message")
    worker.postMessage("Start");
    setModalOpen(true);
  };

  const stopRedirecting = () => {
      worker.terminate();
      console.log("zabilem workera")
    worker = undefined;
    setModalOpen(false)
  };

  const redirectNow = () => {
      worker.terminate();
      console.log("zabilem workera")
      Router.push("/");
    worker = undefined;
  };

  return (
    <div className={styles.WorkerTest}>
      {modalOpen ? (
        <TwoButtonModal
          modalText={"You will be redirected in 5 seconds."}
          mainButton={"left"}
          leftButtonText={"Stop redirecting"}
          leftButtonFunction={stopRedirecting}
          rightButtonText={"Redirect now"}
          rightButtonFunction={redirectNow}
        />
      ) : null}
      <Button
        buttonFunction={startRedirecting}
        buttonText="Start redirecting"
      />
    </div>
  );
};

export default WorkerTest;
