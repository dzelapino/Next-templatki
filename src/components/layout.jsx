import Navbar from "./navbar";
import styles from "@/styles/components/Layout.module.scss";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
        <div className={styles.LayoutChildren}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;