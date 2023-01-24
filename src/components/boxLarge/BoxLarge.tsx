import styles from '../../styles/components/boxLarge.module.css'


export function BoxLarge({h1, p, column1, column2, column3, c1r1, c2r1, c3r1, c4r1, c1r2, c2r2, c3r2, c4r2, c1r3, c2r3, c3r3, c4r3}) {
    return(
        <div className={styles.boxLargeContainer}>
            <div className={styles.header}>
                <div className={styles.titles}>
                    <h1>{h1}</h1>
                    <p>{p}</p>
                </div>
                <div className={styles.columns}>
                    <h2>{column1}</h2>
                    <h2>{column2}</h2>
                    <h2>{column3}</h2>
                </div>
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.rows}>
                    <h3>{c1r1}</h3>
                    <h3>{c2r1}</h3>
                    <h3>{c3r1}</h3>
                    <h3>{c4r1}</h3>
                </div>

                <div className={styles.rows}>
                    <h3>{c1r2}</h3>
                    <h3>{c2r2}</h3>
                    <h3>{c3r2}</h3>
                    <h3>{c4r2}</h3>
                </div>

                <div className={styles.rows}>
                    <h3>{c1r3}</h3>
                    <h3>{c2r3}</h3>
                    <h3>{c3r3}</h3>
                    <h3>{c4r3}</h3>
                </div>



            </div>

        </div>
    );
}