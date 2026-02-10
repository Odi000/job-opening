import { useEffect, useState } from "react";
import styles from "./Message.module.css";

export default function Message({ event }) {
    const [displayFlex, setDisplayFlex] = useState(false)
    const [visible, setVisible] = useState(false)
    let check = false;
    let message = 'No other jobs available';

    useEffect(() => {
        if (!event.visible) return;
        setDisplayFlex(true);
        const timer = setTimeout(() => setVisible(true), 100)

        return () => clearTimeout(timer);
    }, [event])

    useEffect(() => {
        if (!visible) return;
        const timer = setTimeout(() => handleClick(), 6000);
        return () => clearTimeout(timer);
    }, [visible])

    function handleClick() {
        setVisible(false);
        setDisplayFlex(false);
        event.hook({ visible: false, e: null, hook: null })
    }


    if (event.e === "share") {
        message = 'Copied to Clipboard';
        check = true;
    }

    return (
        <div
            className={visible ?
                styles.displayFlex + ' ' + styles.container + " " + styles.visible :
                displayFlex ?
                    styles.displayFlex + ' ' + styles.container :
                    styles.container}
        >
            {check ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z" /></svg> : ''}
            <p>{message}</p>
            <svg onClick={handleClick} viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
        </div>
    )
}