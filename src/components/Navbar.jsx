import styles from "@/styles/Navbar.module.css";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
    const links = [
        { path: '/', text: 'Home' },
        { path: 'about', text: 'About' },
        { path: 'profile', text: 'Profile' },
        { path: 'login', text: 'Login' },
      ];

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
                {links.map((link) => {
                    return(
                        <li key={link.text}>
                            <a href={link.path}>{link.text}</a>
                        </li>
                    );
                })}
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