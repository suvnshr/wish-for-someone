import HomeClient from '../components/Home/Home.client'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeClient />
    </main>
  )
}
