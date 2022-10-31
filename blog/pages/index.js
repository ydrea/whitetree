import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
//
export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/restaurants?populate=*");
  const restaurants = await res.json();
  const items = restaurants.data;
  console.log(items);
  return { props: { items } };
}
//
export default function Home({ items }) {
  // const dispatch = useDispatch()
  // {/* <img src={`${API_URL}`+`${i.attributes.main_img.data.attributes.name}`} /> */}

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <p className={styles.description}>
            {/* <img src='http://localhost:1337/uploads/logo_60e391feec.png'  
   styles={{ width: 300, height: 300 }} /> */}
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div className={styles.grid}>
            {items &&
              items.map((i) => (
                <Link href={`/restaurant/${i.id}`} key={i.id}>
                  <a className={styles.card}>
                    <h2>{i.attributes.name} &rArr;</h2>
                    {i.attributes.description}
                  </a>
                </Link>
              ))}

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p> Next.js examples.</p>
            </a>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>Deploy with Vercel.</p>
            </a>
          </div>
          <button>count</button>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://github.com/ydrea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              {/* <img src={ `${BASE_URL}` + `${uploads/logo_5c79368669.svg}`}  */}
              {/* alt="ydrea Logo" width={72} height={16} /> */}
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  );
}
