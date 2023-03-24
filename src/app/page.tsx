import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const MyHelloComponent = dynamic(() => import('../components/Hello'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Đây là 1 ví dụ về seo in next.js' />
        <meta property='og:url' content='' />
        <meta
          property='og:image'
          content='https://www.google.com/url?sa=i&url=https%3A%2F%2Finternetviettel.vn%2Fsuu-tam-mot-so-chum-anh-dep.html&psig=AOvVaw1Vvspct1GQx_l290kktcVF&ust=1679733692503000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMingOOV9P0CFQAAAAAdAAAAABAE'
        />
        <meta property='og:description' content='đây là 1 ví dụ seo' />
        <meta property='article:author' content='dungle' />
      </Head>
      <MyHelloComponent />
    </div>
  )
}
