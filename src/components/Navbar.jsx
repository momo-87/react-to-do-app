import styles from "@/styles/Navbar.module.css";
import { useState } from "react";
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return(
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>Home</li>
                <li>About</li>
                <li className={styles.buttonItem}>
                    <button className={styles.navButton} onClick={() => (setDropdown(!dropdown))}>Services<span>&#8595;</span></button>
                    {dropdown && (
                        <ul className={styles.navButtonList}>
                            <li>Design</li>
                            <li>Development</li>
                        </ul> 
                    )}
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;