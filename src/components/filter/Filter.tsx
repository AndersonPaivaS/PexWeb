import { Input } from "../../multipurpose/Input";
import styles from '../../styles/components/filter.module.css'

export function Filter() {
    return(
        <div className={styles.filterContainer}>
            <h1>Filtrar por data</h1>
            <Input imagem="stores" nome="Data inicial" />
            <Input imagem="stores" nome="Data final" />
        </div>
    );
}