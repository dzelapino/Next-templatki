import styles from "@/styles/components/Tile.module.scss";

const Tile = ({ data }) => {
  return (
    <div className={styles.Tile}>
      <div className={styles.Text}>{data.text}</div>
    </div>
  );
};

export default Tile;
