import { useState, useEffect, useRef } from "react";
import styles from "./JobPaper.module.css";

export default function JobPaper({ decorationFinished }) {
    const [show, setShow] = useState(false);
    const [overflowHidden, setOverflowHidden] = useState(true);
    const [starWasClicked, setStarWasClicked] = useState(false);
    const innerContainerRef = useRef(null);

    useEffect(() => {
        if (decorationFinished) setShow(true);
    }, [decorationFinished])

    useEffect(() => {
        if (!show) return;
        const container = innerContainerRef.current;

        container.addEventListener("transitionend", (e) => {
            if (e !== e.srcElement);
            setOverflowHidden(false);
        }, { once: true })
    }, [show])

    function handleStarClick() {
        setStarWasClicked(prevState => !prevState);
    }

    return (
        <div className={overflowHidden ? styles.container : styles.container + ' ' + styles.scroll}>
            <div ref={innerContainerRef} className={show ? `${styles.show} ${styles.innerContainer}` : styles.innerContainer}>
                <div className={styles.paper}>
                    <div className={styles.top}>
                        <img src="/share.png" />
                        <img
                            onClick={handleStarClick}
                            src={starWasClicked ? "/star-filled.png" : "/star.png"}
                            className={starWasClicked ?
                                `${styles.middleStar} ${styles.filled}`
                                : styles.middleStar
                            }
                        />
                        <div className={styles.moreJobs}>
                            <img src="/arrow.png" />
                            <p>View More Jobs</p>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h1>IT Audit Business Analyst</h1>
                        <p>BRNO, Czech Republic</p>
                        <div className={styles.line}></div>
                    </div>
                    <section className={styles.content}>
                        <div className={styles.table}>
                            <ul>
                                <li>
                                    <p className={styles.bold}>Job Identification:</p>
                                    <p className={styles.normal}>324376</p>
                                </li>
                                <li>
                                    <p className={styles.bold}>Job Category:</p>
                                    <p className={styles.normal}>Digital Assurance</p>
                                </li>
                                <li>
                                    <p className={styles.bold}>Posting Date:</p>
                                    <p className={styles.normal}>09/02/2026</p>
                                </li>
                                <li>
                                    <p className={styles.bold}>Role:</p>
                                    <p className={styles.normal}>Individual Contributor</p>
                                </li>
                                <li>
                                    <p className={styles.bold}>Job Type:</p>
                                    <p className={styles.normal}>Regular Employee</p>
                                </li>
                                <li>
                                    <p className={styles.bold}>Security Clearance Required:</p>
                                    <p className={styles.normal}>No</p>
                                </li>
                                <li>
                                    <p className={styles.bold}>Experience Required:</p>
                                    <p className={styles.normal}>1+ years</p>
                                </li>
                                <li>
                                    <p className={styles.bold}>Additional Information:</p>
                                    <p className={styles.normal}>Visa or work permit sponsorship is not available for this position</p>
                                </li>
                                <li>
                                    <p className={styles.bold}>Language Requirements:</p>
                                    <p className={styles.normal}>English</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.jobDescription}>
                            <h2>Job Description</h2>
                            <p>This position involves conducting IT audits by evaluating the design, implementation, and effectiveness of key IT controls, focusing on Information Security, Access Management, Change Management, and IT Operations. It includes testing automated IT controls, communicating with clients and audit teams, preparing management reports with findings, and performing data analysis for journal entry testing.</p>
                        </div>
                        <div className={styles.requirements}>
                            <h3>Requirements:</h3>
                            <ul>
                                <li>University education or at least one year of relevant work</li>
                                <li>Interest in valuation, financial planning, and modeling (experience in these areas is an advantage).</li>
                                <li>Ability to communicate orally and in writing in English and Czech.</li>
                                <li>Analytical thinking and the ability to logically connect conclusions.</li>
                                <li>Professional appearance and behavior, responsibility, and reliability.</li>
                            </ul>
                        </div>
                        <div className={styles.benefits}>
                            <h2>What We Provide:</h2>
                            <ul>
                                <li>Starting at 60,000 CZK/month, with room for negotiation based on candidate qualifications.</li>
                                <li>Oracle equity in the form of publicly traded RSUs, health, pension, and life insurance.</li>
                                <li>A hybrid work week with one day in the office and the flexibility to work from home or the office for the rest of the week.</li>
                                <li>Outstanding vacation allowance (25 days) to recharge when and where you need it.</li>
                                <li>Exceptional team events as well as meal vouchers, our own gym, Flexi passes, a discounted MultiSport card, and more!</li>
                                <li>Work-life balance – our worldwide team supports each other so that your evenings and weekends are actually your own.</li>
                                <li>Subsidized career/skills growth and mentorship for all team members.</li>
                            </ul>
                        </div>
                        <div className={styles.responsibilities}>
                            <h2>Responsibilities</h2>
                            <ul>
                                <li>Perform IT audit testing of key controls related to IT operations.</li>
                                <li>Review and test automated controls such as data transfers, system calculations, and data migrations.</li>
                                <li>Support data analysis activities, including journal entry testing for statutory financial audits.</li>
                                <li>Communicate with clients and collaborate with audit teams to gather information and clarify processes.</li>
                                <li>Document audit work, findings, and supporting evidence in line with internal methodologies.</li>
                            </ul>
                        </div>
                        <button className={styles.apply}>APPLY NOW</button>
                        <div className={styles.line2}></div>
                    </section>
                </div>

            </div>
        </div>
    )
}

function FirstSlide() {
    return (<></>)
}