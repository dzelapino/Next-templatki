import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/Navbar.module.scss";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [sidebarOn, setSidebarOn] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.LeftSide}>
        <Link className={styles.navLink} href="/">
          Home
        </Link>
        <Link className={styles.navLink} href="/modalTest">
          Modal
        </Link>
      </div>

      <div className={styles.RightSide}>
        <div
          className={styles.SidebarButton}
          onClick={() => setSidebarOn(true)}
        >
          ☰
        </div>
      </div>
    </div>
  );
};

export default Navbar;
