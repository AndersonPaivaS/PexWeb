import { Main } from '../components/main/Main';
import { SideBar } from '../components/sideBar/SideBar';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <SideBar />
      <Main />
    </div>
  )
}