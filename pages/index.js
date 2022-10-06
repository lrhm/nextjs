import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ilex Paraguariensis</title>
        <meta name="description" content="Ilex Paraguariensis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Maté🧉
        </h1>
        



        <p className={styles.description}>
          AI, Software and IT Solutions
        </p>

        <p className={styles.subsection}>

          “Robots are not going to replace humans, they are going to make their jobs much more humane. Difficult, demeaning, demanding, dangerous, dull – these are the jobs robots will be taking.

          – Sabine Hauert
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ilex-paraguariensis" className={styles.card}>
            <h2>Ilex Paraguariensis &rarr;</h2>
            <p>Find us in Github!</p>
          </a>

          <a href="https://github.com/lrhm/" className={styles.card}>
            <h2>Founder &rarr;</h2>
            <p>Ali Rahimi</p>

          </a>

          <a
            href="emailto:yerbamate.dl@proton.me"
            className={styles.card}
          >
            <h2>Contact Us &rarr;</h2>
            <p>Interested in hiring customized AI solutions for your needs?</p>
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

      </footer>
    </div>
  )
}
