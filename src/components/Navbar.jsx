import styles from "@/styles/Navbar.module.css";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const handle = (event) => {
            if(dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handle);
        
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handle);
        };
    }, [dropdown]);

    return(
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>Home</li>
                <li>About</li>
                <li className={styles.buttonItem} ref={ref}>
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