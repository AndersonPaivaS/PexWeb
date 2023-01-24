import styles from '../../styles/components/menuItem.module.css'

export function MenuItem({imagem, nome}) {
    return(
        <div className={styles.itemContainer}>
            <img src={`/icons/${imagem}.png`} alt="" />
            <h1> {nome} </h1>
        </div>
    );
}