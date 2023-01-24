import styles from '../../styles/components/boxMedium.module.css'


export function BoxMedium({h1, h3, p, h2}) {
    return(
        <div className={styles.boxMediumContainer}>
            <img src="/icons/money-gray.png" alt="Cifrão" />

            <div className={styles.main}>
                <div>
                    <h1>{h1}</h1>
                    <h3>{h3}</h3>
                </div>
                <p>{p}</p>
            </div>

            <h2>{h2}</h2>
        </div>
    );
}