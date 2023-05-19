import styles from "@/styles/pages/Home.module.scss";
import Link from "next/link";
import Tile from "@/components/tile";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Link className={styles.Link} href="/workerTest">
        <Tile data={{ text: "Web Workers" }} />
      </Link>
      <div></div>
      <Tile data={{ text: "" }} />
      <div></div>
      <Tile data={{ text: "Templates for Next" }} />
      <div></div>
      <Link className={styles.Link} href="/modalTest">
        <Tile data={{ text: "Modal Test" }} />
      </Link>
      <div></div>
      <Tile data={{ text: "" }} />
    </div>
  );
};

export default Home;
