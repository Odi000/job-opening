import { useRef, useEffect, useState } from 'react';
import styles from './LoadingApp.module.css'

function LoadingApp({ setLoadingFinished }) {
    const loadingLogoRef = useRef(null);
    const [loadingStart, setLoadingStart] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        const loadingLogo = loadingLogoRef.current;
        setTimeout(() => setLoadingStart(true), 900)

        function transitionHandler(e) {
            if (e.elapsedTime > .25) return;
            setTimeout(() => setLoadingFinished(true), 200);
        }

        loadingLogo.addEventListener("animationend", () => {
            setAnimationFinished(true);
            loadingLogo.style.transition = "width .22s ease-out";
        }, { once: true });

        loadingLogo.addEventListener("transitionend", transitionHandler)

        return () => loadingLogo.removeEventListener("transitionend", transitionHandler);
    }, [])

    return (
        <div className={styles.container}>
            <img
                ref={loadingLogoRef}
                className={animationFinished ? styles.close :
                    loadingStart ? styles.start : ""
                }
                src="/o.svg"
                id='oracle'
            />
        </div>
    )
}

export default LoadingApp;