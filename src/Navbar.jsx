import styles from "./Navbar.module.css";

function Navbar({ loadingFinished }) {
    return (
        <nav className={loadingFinished ? styles.descend : ""}>
            <img src="/oracle.png" />
        </nav>
    )
}

export default Navbar;