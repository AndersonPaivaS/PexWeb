
import styles from '../styles/components/input.module.css'

export function Input({imagem, nome}) {
    return(
        <div className={styles.user}>
            <img src={`/icons/${imagem}.png`} alt={nome} />
            <h2>{nome}</h2>
        </div>
    );
}