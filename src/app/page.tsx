import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
const MyHelloComponent = dynamic(() => import('../components/Hello'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={styles.main}>
      <MyHelloComponent />
    </div>
  )
}
