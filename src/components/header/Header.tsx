import { Input } from "../../multipurpose/Input";

import styles from '../../styles/components/header.module.css'

export function Header() {
    return(
        
        <div className={styles.headerContainer}>
            <div className={styles.guide}>
                <h2> Principal / Dashboard </h2>
            </div>

            <div className={styles.info}>
                <div className={styles.title}>
                    <h1> Velty Dashboard </h1>
                </div>

                <div className={styles.user}>
                    <Input imagem="search" nome="Busca" />
                    <img className={styles.icons} src="/icons/notifications.png"/>
                    <img className={styles.icons} src="/icons/moon.png"/>
                    <img className={styles.icons} src="/icons/info.png"/>
                    <img className={styles.photoWomen} src="/icons/women.png"/>
                </div>
            </div>

        </div>
    );
}