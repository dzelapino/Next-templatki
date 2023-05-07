import styles from "@/styles/components/Sidebar.module.scss";
import { useState } from "react";

const Sidebar = () => {

    [active, toggleActive] = useState(false)

    return (
        <div className={styles.Sidebar}>
            
        </div>
    )

}

export default Sidebar;