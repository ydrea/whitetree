import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
//
export async function getStaticProps() {
  console.log('server side');
  const res = await fetch('http://localhost:1337/api/restaurants')
  const restaurants = await res.json()
  const items = restaurants.data
  console.log(items)
  return { props: { items } }
}
//
export default function Home({items}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.grid}> 

        {items && items.map((i) => (
          <Link  href={`/api/restaurants/attributes/${i.attributes.Slug}`} key={i.id}>
          <a className={styles.card}>

          <h2>{i.attributes.name} &rarr;</h2>
          {i.attributes.ime}
          {i.id}
          </a>
          </Link>)
      )}
 
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
