import styles from '../../styles/components/sideBar.module.css'
import { MenuItem } from './MenuItem';
export function SideBar() {
    return(
        <div className={styles.sideBarContainer}>
            <div className={styles.header}>
                <img src="/icons/Frame.png" alt="PEX - Delivery da construção" />
            </div>
            <div className={styles.items}>

                <span className={styles.currentItem}>
                    <img src={`/icons/home.png`} />
                    <h1> Dashboard </h1>
                </span>
                <MenuItem imagem="cart" nome="Vendas" />
                <MenuItem imagem="statistics" nome="Relatórios" />
                <MenuItem imagem="stores" nome="Lojas parceiras" />
                <MenuItem imagem="user" nome="Clientes" />
            </div>
        </div>
    );
}