import styles from '../../styles/components/boxSmall.module.css'

export function BoxSmall({h2, h1, h3, p, cor}) {
    return(
        <div className={styles.boxSmallContainer}>
            <h2>{h2}</h2>
            <div>
                <h1>{h1}</h1>
                <h3>{h3}</h3>
            </div>
            <p style={{color: `${cor}`}}>{p}</p>
        </div>
    );
}