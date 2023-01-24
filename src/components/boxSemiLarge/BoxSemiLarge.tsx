
import styles from '../../styles/components/boxSemiLarge.module.css'

export function BoxSemiLarge({h1, h3, h2, p, cor, nomeImagem}) {
    return(
        <div style={{backgroundColor: `${cor}`}} className={styles.boxSemiLargeContainer}>
            <div className={styles.main}>
                <img src={`/icons/${nomeImagem}.png`} alt="Símbolo de dinheiro" />
                <h1>{h1}</h1>
                <h3>{h3}</h3>
            </div> 

            <div className={styles.footer}>
                <h2>{h2}</h2>
                <p>{p}</p>
            </div>
        </div>
    );
}