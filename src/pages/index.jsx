import styles from "@/styles/pages/Home.module.scss";
import Tile from "@/components/tile"

const Home = () => {

  return (
    <div className={styles.Home}>
     <Tile data={{text: "Templates for Next"}}/>
    </div>
  );
}

export default Home;
