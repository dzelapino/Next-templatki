import Navbar from "./navbar";
import styles from "@/styles/components/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
        <div className={styles.LayoutChildren}>{children}</div>
    </div>
  );
}

export default Layout;