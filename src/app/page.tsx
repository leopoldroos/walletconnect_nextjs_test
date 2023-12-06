import Image from 'next/image'
import styles from './page.module.css'
import { ConnectButton } from '@/context/Web3Modal'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Walletconnect testing...
        </p>
        <div>
          <ConnectButton />
        </div>
      </div>
    </main>
  )
}
