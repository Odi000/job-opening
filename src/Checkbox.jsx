import styles from "./Checkbox.module.css";

export default function Checkbox({ id, handleChange }) {
    return (
        <div className={styles.checkboxWrapper}>
            <input type="checkbox" id={id} onChange={handleChange} />
            <label htmlFor={id} className={styles.checkBox} />
        </div>
    )
}