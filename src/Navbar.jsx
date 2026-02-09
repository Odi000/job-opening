import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

function Navbar({ loadingFinished, serDecorationFinished }) {
    const navbarRef = useRef(null);
    const decorationRef = useRef(null);
    const [showDecoration, setShowDecoration] = useState(false);

    useEffect(() => {
        const navbar = navbarRef.current;
        const decoration = decorationRef.current;

        navbar.addEventListener("transitionend", e => {
            if (e.srcElement !== navbar) return;
            setShowDecoration(true);
        }, { once: true })

        decoration.addEventListener("transitionend", e => {
            if (e.srcElement !== decoration) return;
            serDecorationFinished(true);
        }, { once: true })
    }, [])

    return (
        <>
            <nav ref={navbarRef} className={loadingFinished ? styles.descend : ""}>
                <img
                    className={styles.oracle}
                    src="/oracle.png"
                />
            </nav>
            <img
                className={showDecoration ? `${styles.decoration} ${styles.show}` : styles.decoration}
                src="/decoration.avif"
                ref={decorationRef}
            />
        </>
    )
}

export default Navbar;